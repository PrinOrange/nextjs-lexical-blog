import { normalizeDate } from "@/lib/date";
import { fontSourceSerifScreenCN } from "@/styles/font";
import { TPostListItem } from "@/types/post-list";
import { nanoid } from "nanoid";
import Link from "next/link";
import { TagBadge } from "./TagBadge";

export const PostList = (props: { data: TPostListItem[] }) => {
  return (
    <div>
      {props.data.map((postListItem, index) => (
        <Link className="cursor-pointer" href={`/blog/${postListItem.id}`} key={`post-list-${nanoid()}`}>
          <div
            className={`${fontSourceSerifScreenCN.className} flex flex-col justify-center ${
              index !== props.data.length - 1 && "border-b"
            } border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-950 dark:border-gray-800 p-3`}
          >
            <div className="flex-center flex flex-col py-2">
              <h3 className="mx-auto text-lg font-extrabold capitalize">{postListItem.frontMatter.title}</h3>
              {postListItem.frontMatter.subtitle && (
                <div className="mx-auto text-base font-semibold capitalize text-gray-700 dark:text-gray-300">
                  {postListItem.frontMatter.subtitle}
                </div>
              )}
            </div>
            <div className="text-center">{normalizeDate(postListItem.frontMatter.time)}</div>
            {postListItem.frontMatter.summary && (
              <div className="flex my-1 justify-center">
                <p>{postListItem.frontMatter.summary}</p>
              </div>
            )}
            {postListItem.frontMatter.tags && (
              <div className="my-2 flex justify-center">
                {postListItem.frontMatter.tags.map((tagName) => (
                  <TagBadge name={tagName} size="sm" key={`tags-${nanoid()}`} />
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
