import type { TPostListItem } from "@/types/docs.type";
import Link from "next/link";

export const MorePostLinks = (props: {
  prevPostListItem: TPostListItem | null;
  nextPostListItem: TPostListItem | null;
}) => {
  return (
    <ul className="my-5 flex list-disc flex-col justify-center px-5">
      {props.prevPostListItem && (
        <li className="my-1">
          <Link className=" hover:text-sky-600 dark:hover:text-sky-500" href={`/blog/${props.prevPostListItem?.id}`}>
            {props.prevPostListItem?.frontMatter.title}
          </Link>
        </li>
      )}
      {props.nextPostListItem && (
        <li className="my-1">
          <Link className=" hover:text-sky-600 dark:hover:text-sky-500" href={`/blog/${props.nextPostListItem?.id}`}>
            {props.nextPostListItem?.frontMatter.title}
          </Link>
        </li>
      )}
    </ul>
  );
};
