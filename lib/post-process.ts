import { PostsRootDirectory } from "@/consts/consts";
import { TFrontmatter } from "@/types/frontmatter.type";
import { TPostListItem, TTagSubPostSet } from "@/types/post-list";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import { nullifyEmptyString } from "./utils";

async function getFrontmatters(filepath: string): Promise<TFrontmatter> {
  const source = fs.readFileSync(filepath, "utf-8");
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: { format: "md" },
  });
  return mdxSource.frontmatter as TFrontmatter;
}

export const getPostFileContent = (postId: string): string | null => {
  const filePath = path.join(PostsRootDirectory, `${postId}.md`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf-8");
  return source;
};

const sortOutPostLists = async (): Promise<{
  allPostList: TPostListItem[];
  pinnedPostList: TPostListItem[];
  tagSubPostSet: TTagSubPostSet;
}> => {
  const allPostListItems: TPostListItem[] = [];
  const pinnedPostList: TPostListItem[] = [];
  const tagSubPostSet: TTagSubPostSet = {};

  const postFilePaths: string[] = [];

  fs.readdirSync(PostsRootDirectory).forEach((fileName) => {
    const filePath = path.join(PostsRootDirectory, fileName);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isFile() && fileName.endsWith(".md")) {
      postFilePaths.push(filePath);
    }
  });

  for (let i = 0; i < postFilePaths.length; i++) {
    const frontmatter = await getFrontmatters(postFilePaths[i]);
    const postId = path.parse(postFilePaths[i]).name;

    const postListItem: TPostListItem = {
      id: postId,
      frontMatter: {
        title: frontmatter.title,
        subtitle: nullifyEmptyString(frontmatter.subtitle),
        coverURL: nullifyEmptyString(frontmatter.coverURL),
        tags: frontmatter.tags ?? [],
        summary: nullifyEmptyString(frontmatter.summary),
        time: frontmatter.time,
        pin: frontmatter.pin ?? false,
        noPrompt: frontmatter.noPrompt ?? false,
        allowShare: frontmatter.allowShare ?? true,
      },
    };

    allPostListItems.push(postListItem);

    if (postListItem.frontMatter.pin) {
      pinnedPostList.push(postListItem);
    }
  }

  allPostListItems.sort((a, b) => {
    return a.frontMatter.time > b.frontMatter.time ? -1 : 1;
  });

  allPostListItems.map((item) => {
    item.frontMatter.tags?.map((tagName) => {
      if (tagSubPostSet[tagName] == null) {
        tagSubPostSet[tagName] = [];
      }
      tagSubPostSet[tagName].push(item);
    });
  });

  return { allPostList: allPostListItems, tagSubPostSet: tagSubPostSet, pinnedPostList: pinnedPostList };
};

export const sortedPosts = await sortOutPostLists();
