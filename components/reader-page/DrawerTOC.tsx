import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useActiveHeading } from "@/hooks/useActiveHeading";
import useDrawerTOCState from "@/stores/useDrawerTOCState";
import type { TPostTOCItem } from "@/types/docs.type";
import Link from "next/link";
import { MdMenuBook } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const DrawerTOC = (props: { data: TPostTOCItem[] }) => {
  const isTOCOpen = useDrawerTOCState((state) => state.isOpen);
  const setIsTOCOpen = useDrawerTOCState((state) => state.changeDrawerTOCOpen);
  const activeId = useActiveHeading(props.data.map((item) => `#${item.anchorId}`));
  return (
    <Sheet onOpenChange={setIsTOCOpen} open={isTOCOpen}>
      <SheetTrigger
        className="fixed right-5 bottom-16 border border-gray-700 bg-white shadow-xl dark:border-gray-500 dark:bg-black"
        title="Open the table of contents"
      >
        <div
          className="p-1 font-bold"
          onClick={() => setIsTOCOpen(!isTOCOpen)}
          onKeyDown={() => {}}
          title="Open the table of contents"
        >
          <MdMenuBook className="text-3xl" />
        </div>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle className="mt-8 text-center font-bold text-base">{"TABLE OF CONTENTS"}</SheetTitle>
        </SheetHeader>
        <ul className="flat-scrollbar flat-scrollbar-normal my-3 flex h-[70vh] flex-col overflow-y-auto">
          {props.data?.map((item) => (
            <Link
              className={twMerge(
                "border-t border-b border-dashed px-2 py-1 hover:bg-gray-100 hover:dark:bg-gray-900",
                activeId === `#${item.anchorId}` ? "bg-gray-100 text-sky-700 dark:bg-gray-900 dark:text-sky-500" : "",
              )}
              href={`#${item.anchorId}`}
              key={`drawer-toc-${item.anchorId}`}
              onClick={() => {
                setIsTOCOpen(false);
              }}
            >
              <li className={"p-2"} style={{ paddingLeft: `${item.level - 2}em` }}>{`${item.title}`}</li>
            </Link>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
