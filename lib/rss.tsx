import { CopyrightAnnouncement, LatestPostCountInHomePage, WebsiteURL } from "@/consts/consts";
import { Config } from "@/data/config";
import { Feed } from "feed";
import fs from "fs";
import { JSDOM } from "jsdom";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { renderToString } from "react-dom/server";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeMathJax from "rehype-mathjax/svg";
import rehypePresetMinify from "rehype-preset-minify";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkPrism from "remark-prism";
import { getPostFileContent, sortedPosts } from "./post-process";

const NoticeForRSSReaders = `\n---\n**NOTE:** Different RSS reader may have deficient even no support for svg formulations rendering. If it happens, please read the origin page to have better experience.`;

function minifyHTMLCode(htmlString: string): string {
  const dom = new JSDOM(htmlString);
  const document = dom.window.document;
  const elements = document.querySelectorAll("*");
  const unusedElements = document.querySelectorAll("script, style");

  // Remove all class attributes.
  elements.forEach((element) => {
    element.removeAttribute("class");
  });

  // Remove all script and style tags.
  unusedElements.forEach((element) => {
    element.parentElement?.removeChild(element);
  });

  return dom.serialize();
}

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

  for (let i = 0; i < Math.min(LatestPostCountInHomePage, sortedPosts.allPostList.length); i++) {
    const post = sortedPosts.allPostList[i];
    const postFileContent = `${getPostFileContent(post.id)}${NoticeForRSSReaders}}`;
    const dateNumber = post.frontMatter.time.split("-").map((num) => parseInt(num));
    const mdxSource = await serialize(postFileContent ?? "", {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkPrism, externalLinks, remarkMath, remarkGfm],
        rehypePlugins: [rehypeMathJax, rehypeAutolinkHeadings, rehypeSlug, rehypePresetMinify as any, rehypeRaw],
        format: "md",
      },
    });
    const htmlContent = minifyHTMLCode(renderToString(<MDXRemote {...mdxSource} />));

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
          link: `https://${Config.SiteDomain}/about`,
        },
      ],
      category: post.frontMatter.tags?.map((tagname) => ({ name: tagname })),
      date: new Date(dateNumber[0], dateNumber[1], dateNumber[2]),
      image: post.frontMatter.coverURL ?? undefined,
    });
  }
  fs.writeFile("./public/rss.xml", feed.rss2(), "utf-8", (err) => {});
};
