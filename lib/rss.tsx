import { CopyrightAnnouncement, LatestPostCountInHomePage, WebsiteURL } from "@/consts/consts";
import { Config } from "@/data/config";
import { Feed } from "feed";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { renderToString } from "react-dom/server";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMathJax from "rehype-mathjax/svg";
import rehypePresetMinify from "rehype-preset-minify";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkPrism from "remark-prism";
import { getPostFileContent, sortedPosts } from "./post-process";

const NoticeForRSSReaders = `\n---\n**NOTE:** Different RSS reader may have deficient even no support for svg formulations rendering. If it happens, please read the origin page to have better experience.`;

/**
 * Generate the RSS Feed File in `./public` so it could be visited by https://domain/rss.xml
 */
export const generateRSSFeed = async () => {
  const feed = new Feed({
    title: Config.SiteTitle,
    description: Config.Sentence,
    id: Config.SiteDomain,
    link: WebsiteURL,
    image: Config.PageCovers.websiteCoverURL,
    favicon: `https://${Config.SiteDomain}/favcion.ico`,
    copyright: CopyrightAnnouncement,
    generator: "Node.js Feed",
    author: {
      name: Config.AuthorName,
      email: Config.SocialLinks.email,
      link: WebsiteURL,
    },
  });

  for (let i = 0; i < LatestPostCountInHomePage; i++) {
    const post = sortedPosts.allPostList[i];
    const postContent = `${getPostFileContent(post.id)}${NoticeForRSSReaders}}`;
    const dateNumber = post.frontMatter.time.split("-").map((num) => parseInt(num));
    const mdxSource = await serialize(postContent ?? "", {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkPrism, externalLinks, remarkMath, remarkGfm],
        rehypePlugins: [rehypeMathJax, rehypeAutolinkHeadings, rehypeSlug, rehypePresetMinify as any],
        format: "md",
      },
    });
    const htmlContent = renderToString(<MDXRemote {...mdxSource} />);

    feed.addItem({
      title: post.frontMatter.title,
      id: post.id,
      link: `https://${Config.SiteDomain}/blog/${post.id}`,
      description: post.frontMatter.summary ?? undefined,
      content: htmlContent,
      author: [
        {
          name: Config.AuthorName,
          email: Config.SocialLinks.email,
          link: `https://${Config.SiteDomain}/`,
        },
      ],
      category: post.frontMatter.tags?.map((tagname) => ({ name: tagname })),
      date: new Date(dateNumber[0], dateNumber[1], dateNumber[2]),
      image: post.frontMatter.coverURL ?? undefined,
    });
  }
  fs.writeFile("./public/rss.xml", feed.rss2(), "utf-8", (err) => {});
};
