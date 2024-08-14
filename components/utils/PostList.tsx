import { normalizeDate } from "@/lib/date";
import type { TPostListItem } from "@/types/post-list";
import { nanoid } from "nanoid";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const PostList = (props: { data: TPostListItem[] }) => {
  return (
    <div>
      {props.data.map((postItem, index) => (
        <Link className="cursor-pointer" href={`/blog/${postItem.id}`} key={`post-list-${nanoid()}`}>
          <div
            className={`flex flex-col justify-center ${
              index !== props.data.length - 1 && "border-b"
            } border-gray-200 px-3 py-1 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900`}
          >
            <div className={"post-list-caption-font flex-col py-3"}>
              <div className="flex justify-center">
                <h3 className="mx-auto font-extrabold text-lg capitalize">{postItem.frontMatter.title}</h3>
              </div>
              <div className="flex justify-center">
                {postItem.frontMatter.subtitle && (
                  <div className="mx-auto font-bold text-gray-700 text-sm capitalize dark:text-gray-300">
                    {postItem.frontMatter.subtitle}
                  </div>
                )}
              </div>
            </div>
            {postItem.frontMatter.summary && (
              <div className={"flex justify-center content-font"}>
                <p>{postItem.frontMatter.summary}</p>
              </div>
            )}
            <div className="my-2 flex flex-wrap justify-between">
              <div className="my-auto mr-2 flex h-6 flex-col justify-center text-center text-sm italic">
                <div className="my-auto">{normalizeDate(postItem.frontMatter.time)}</div>
              </div>
              {postItem.frontMatter.tags && (
                <div className="my-auto flex flex-wrap">
                  {postItem.frontMatter.tags.map((tagName) => (
                    <Badge
                      className="my-1 mr-1 text-gray-600 dark:text-gray-300"
                      key={`tags-${nanoid()}`}
                      variant={"secondary"}
                    >
                      {tagName}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
