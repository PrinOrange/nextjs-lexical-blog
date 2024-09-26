import fs from "fs";
import path from "path";
import { PostFilesDirectory } from "@/consts/consts";
import type { TPostFrontmatter } from "@/types/frontmatter.type";
import type { TPostListItem, TPostsByTag } from "@/types/docs.type";
import { serialize } from "next-mdx-remote/serialize";
import { titleCase } from "title-case";
import { isEmptyString, nullifyEmptyArray, nullifyEmptyString } from "./utils";

async function extractFrontmatters(filepath: string): Promise<TPostFrontmatter> {
  const source = fs.readFileSync(filepath, "utf-8");
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: { format: "md" },
  });
  const frontmatter = mdxSource.frontmatter as TPostFrontmatter;

  const normalizedTags = frontmatter.tags
    ?.filter((tagname) => !isEmptyString(tagname))
    .map((tagname) => tagname.toUpperCase());

  const normalizedResult: TPostFrontmatter = {
    title: titleCase(frontmatter.title),
    subtitle: nullifyEmptyString(frontmatter.subtitle),
    coverURL: nullifyEmptyString(frontmatter.coverURL),
    tags: nullifyEmptyArray(normalizedTags),
    summary: nullifyEmptyString(frontmatter.summary),
    time: frontmatter.time,
    pin: frontmatter.pin ?? false,
    noPrompt: frontmatter.noPrompt ?? false,
    allowShare: frontmatter.allowShare ?? true,
    closed: frontmatter.closed ?? false,
  };

  return normalizedResult;
}

function readPostsDirectory(): string[] {
  const result: string[] = [];
  const files = fs.readdirSync(PostFilesDirectory);

  for (const fileName of files) {
    const filePath = path.join(PostFilesDirectory, fileName);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isFile() && fileName.endsWith(".md")) {
      result.push(filePath);
    }
  }
  return result;
}

export const getPostFileContent = (postId: string): string | null => {
  const filePath = path.join(PostFilesDirectory, `${postId}.md`);
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  return content;
};

const sortOutPosts = async (): Promise<{
  allPostList: TPostListItem[];
  pinnedPostList: TPostListItem[];
  postsByTag: TPostsByTag;
}> => {
  const allPostList: TPostListItem[] = [];
  const pinnedPostList: TPostListItem[] = [];
  const postsByTag: TPostsByTag = {};

  const postFilePaths: string[] = readPostsDirectory();

  for (let i = 0; i < postFilePaths.length; i++) {
    const frontmatter = await extractFrontmatters(postFilePaths[i]);
    const postId = path.parse(postFilePaths[i]).name;

    const currentPostListItem: TPostListItem = {
      id: postId,
      frontMatter: frontmatter,
    };

    if (!currentPostListItem.frontMatter.closed) {
      allPostList.push(currentPostListItem);
      if (currentPostListItem.frontMatter.pin) {
        pinnedPostList.push(currentPostListItem);
      }
    }
  }

  pinnedPostList.sort((a, b) => {
    return a.frontMatter.time > b.frontMatter.time ? -1 : 1;
  });

  allPostList.sort((a, b) => {
    return a.frontMatter.time > b.frontMatter.time ? -1 : 1;
  });

  allPostList.forEach((item) => {
    item.frontMatter.tags?.forEach((tagName) => {
      if (postsByTag[tagName] == null) {
        postsByTag[tagName] = [];
      }
      postsByTag[tagName].push(item);
    });
  });

  return { allPostList: allPostList, postsByTag: postsByTag, pinnedPostList: pinnedPostList };
};

export const sortedPosts = await sortOutPosts();
