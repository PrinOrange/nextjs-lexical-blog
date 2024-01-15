import { normalizeDate } from "@/lib/date";
import { fontSourceSerifScreenCN } from "@/styles/font";
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
            } border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-950 dark:border-gray-800 p-3`}
          >
            <div className={`${fontSourceSerifScreenCN.className} text-center flex-col py-2`}>
              <h3 className="mx-auto text-lg font-extrabold capitalize">{postItem.frontMatter.title}</h3>
              {postItem.frontMatter.subtitle && (
                <div className="mx-auto text-base font-semibold capitalize text-gray-700 dark:text-gray-300">
                  {postItem.frontMatter.subtitle}
                </div>
              )}
            </div>
            <div className="text-center text-sm italic">{normalizeDate(postItem.frontMatter.time)}</div>
            {postItem.frontMatter.tags && (
              <div className="my-2 flex justify-center">
                {postItem.frontMatter.tags.map((tagName) => (
                  <Badge
                    variant={"secondary"}
                    className="mx-1 text-gray-600 dark:text-gray-300"
                    key={`tags-${nanoid()}`}
                  >
                    {tagName}
                  </Badge>
                ))}
              </div>
            )}
            {postItem.frontMatter.summary && (
              <div className={`${fontSourceSerifScreenCN.className} flex my-1 justify-center`}>
                <p>{postItem.frontMatter.summary}</p>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
