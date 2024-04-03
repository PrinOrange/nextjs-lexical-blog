import { normalizeDate } from "@/lib/date";
import { TPostListItem } from "@/types/post-list";
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
            } border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 dark:border-gray-800 px-3 py-1`}
          >
            <div className={"font-source-serif-screen flex-col py-3"}>
              <div className="flex justify-center">
                <h3 className="mx-auto text-lg font-extrabold capitalize">{postItem.frontMatter.title}</h3>
              </div>
              <div className="flex justify-center">
                {postItem.frontMatter.subtitle && (
                  <div className="mx-auto text-sm font-bold capitalize text-gray-700 dark:text-gray-300">
                    {postItem.frontMatter.subtitle}
                  </div>
                )}
              </div>
            </div>
            {postItem.frontMatter.summary && (
              <div className={"font-source-serif-screen flex justify-center"}>
                <p>{postItem.frontMatter.summary}</p>
              </div>
            )}
            <div className="flex flex-wrap justify-between my-2">
              <div className="text-center flex flex-col justify-center italic text-sm my-auto mr-2 h-6">
                <div className="my-auto">{normalizeDate(postItem.frontMatter.time)}</div>
              </div>
              {postItem.frontMatter.tags && (
                <div className="flex flex-wrap my-auto">
                  {postItem.frontMatter.tags.map((tagName) => (
                    <Badge
                      className="mr-1 my-1 text-gray-600 dark:text-gray-300"
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
