import { useActiveHeading } from "@/hooks/useActiveHeading";
import type { TTOCItem } from "@/types/toc.type";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const TOC = (props: { data: TTOCItem[] }) => {
  const activeId = useActiveHeading(props.data.map((item) => `#${item.anchorId}`));

  return (
    <div className="mx-5">
      <div className="border-gray-500 border-t-2 border-b-2 p-2 text-center font-bold text-lg">
        {"TABLE OF CONTENTS"}
      </div>
      <div className="flat-scrollbar-normal h-[60vh] overflow-y-auto px-2 py-2">
        <div>
          {props.data?.map((item) => (
            <Link href={`#${item.anchorId}`} key={`toc-${item.anchorId}`}>
              <div
                className={twMerge(
                  "rounded-lg py-2 text-sm hover:text-sky-700 dark:hover:text-sky-400",
                  activeId === `#${item.anchorId}` ? "text-sky-700 dark:text-sky-400" : "",
                )}
                style={{ paddingLeft: `${item.level - 1}em` }}
              >{`${item.title}`}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
