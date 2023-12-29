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
        <div
          key={`post-list-${nanoid()}`}
          className={`${fontSourceSerifScreenCN.className} flex flex-col justify-center ${
            index !== props.data.length - 1 && "border-b"
          } border-dashed border-gray-400 py-3`}
        >
          <Link className="hover:text-gray-600 dark:hover:text-gray-400" href={`/blog/${postListItem.id}`}>
            <div className="flex-center flex flex-col py-2 ">
              <h3 className="mx-auto text-xl font-extrabold capitalize">{postListItem.frontMatter.title}</h3>
              {postListItem.frontMatter.subtitle && (
                <div className="mx-auto text-base font-semibold capitalize">{postListItem.frontMatter.subtitle}</div>
              )}
            </div>
            <div className="text-center">{normalizeDate(postListItem.frontMatter.time)}</div>
            {postListItem.frontMatter.summary && (
              <div className="flex my-1 justify-center">
                <p>{postListItem.frontMatter.summary}</p>
              </div>
            )}
          </Link>
          {postListItem.frontMatter.tags && (
            <div className="my-2 flex justify-center">
              {postListItem.frontMatter.tags.map((tagName) => (
                <TagBadge name={tagName} size="sm" key={`tags-${nanoid()}`} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
