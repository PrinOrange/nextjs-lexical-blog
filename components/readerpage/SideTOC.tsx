import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TTOCItem } from "@/types/toc.type";
import Link from "next/link";
import { useState } from "react";
import { FaHeading } from "react-icons/fa";

export const SideTOC = (props: { data: TTOCItem[] }) => {
  const [isTOCOpen, setIsTOCOpen] = useState(false);
  return (
    <Sheet open={isTOCOpen} onOpenChange={setIsTOCOpen}>
      <SheetTrigger
        title="Open the table of contents"
        className="bottom-7 right-4 fixed bg-white dark:bg-black border dark:border-gray-500 shadow-xl"
      >
        <FaHeading onClick={() => setIsTOCOpen(!isTOCOpen)} className="p-3 w-14 h-14" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="mt-8 font-bold">{"TABLE OF CONTENTS"}</SheetTitle>
        </SheetHeader>
        <ul className="my-3 flat-scrollbar h-[70vh] flex flex-col overflow-y-auto">
          {props.data?.map((item) => (
            <Link
              className="hover:text-sky-500 border-t border-b py-2 border-dashed"
              onClick={() => {
                setIsTOCOpen(false);
              }}
              key={`flat-toc-${item.anchorId}`}
              href={`#${item.anchorId}`}
            >
              <li
                className="my-2 target:text-blue-500"
                style={{ paddingLeft: `${item.level - 2}em` }}
              >{`${item.title}`}</li>
            </Link>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
