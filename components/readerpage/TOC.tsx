import { useActiveHeading } from "@/hooks/useActiveHeading";
import { TTOCItem } from "@/types/toc.type";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const TOC = (props: { data: TTOCItem[] }) => {
  const activeId = useActiveHeading(props.data.map((item) => `#${item.anchorId}`));

  return (
    <div className="mx-5">
      <div className="text-lg text-center p-2 font-bold border-t-2 border-b-2 border-gray-500">
        {"TABLE OF CONTENTS"}
      </div>
      <div className="px-2 py-2 h-[60vh] overflow-y-auto flat-scrollbar-normal">
        <div>
          {props.data?.map((item) => (
            <Link href={`#${item.anchorId}`} key={`toc-${item.anchorId}`}>
              <div
                className={twMerge(
                  `py-2 text-sm rounded-lg hover:text-sky-700 dark:hover:text-sky-400`,
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
