import { TTOCItem } from "@/types/toc.type";
import Link from "next/link";

export const TOC = (props: { data: TTOCItem[] }) => {
  return (
    <div className="sticky top-[5em] mx-5 p-2 border-l border-dashed border-gray-500">
      <div className="p-2 font-bold border-b border-gray-500">{"TABLE OF CONTENTS"}</div>
      <ul className="flat-scrollbar my-1 px-1 h-[60vh] overflow-y-auto">
        {props.data?.map((item) => (
          <Link className="hover:text-sky-500" href={`#${item.anchorId}`} key={`toc-${item.anchorId}`}>
            <li
              className="my-2 text-sm target:text-blue-500"
              style={{ paddingLeft: `${item.level - 1}em` }}
            >{`${item.title}`}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
