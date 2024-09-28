import { MDXComponentsSet } from "@/components/mdx";
import { normalizeDate } from "@/lib/date";
import type { TPostFrontmatter, TPostListItem, TPostTOCItem } from "@/types/docs.type";
import { nanoid } from "nanoid";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

export const PostRender = (props: {
  compiledSource: MDXRemoteSerializeResult;
  tocList: TPostTOCItem[];
  frontMatter: TPostFrontmatter;
  postId: string;
  nextPostListItem: TPostListItem | null;
  prevPostListItem: TPostListItem | null;
}) => {
  const compiledSource = props.compiledSource;
  return (
    <div className="typesetting">
      <div className="border-black border-b-2 pb-1 dark:border-gray-300">
        <div
          className={
            "caption-font my-2 flex justify-center whitespace-normal break-words font-bold text-[1.65rem] text-black leading-[2.1rem] dark:text-white"
          }
        >
          {props.frontMatter?.title}
        </div>
        {props.frontMatter?.subtitle && (
          <div className={"my-1 flex justify-center font-bold text-xl content-font"}>{props.frontMatter.subtitle}</div>
        )}
        <div className="my-1 flex justify-center text-sm italic">{normalizeDate(props.frontMatter?.time)}</div>
        {props.frontMatter?.summary && (
          <p
            className={
              "my-4 border-gray-400 border-l-4 bg-gray-100 py-5 pr-2 pl-5 text-[16px] text-gray-800 content-font dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
            }
          >
            {props.frontMatter?.summary}
          </p>
        )}
        {props.frontMatter.tags && (
          <div className={"flex flex-wrap border-black border-t-2 pt-1 dark:border-gray-300"}>
            {props.frontMatter.tags.map((tagName) => (
              <Link
                className="not-prose my-1 mr-2 border-2 border-black px-2 py-1 font-bold text-gray-700 text-xs hover:text-black dark:border-gray-300 dark:text-gray-300 dark:hover:text-gray-200"
                href={`/tags/${tagName}`}
                key={`tags-${nanoid()}`}
              >
                {tagName}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div
        className={`text-wrap border-gray-500 content-font ${!props.frontMatter.allowShare ? "select-none" : ""}`}
        // {...handleLeftSwipe}
      >
        {compiledSource && (
          <MDXRemote
            compiledSource={compiledSource.compiledSource}
            // @ts-ignore
            components={MDXComponentsSet}
            frontmatter={compiledSource.frontmatter}
            scope={compiledSource.scope}
          />
        )}
      </div>
    </div>
  );
};
