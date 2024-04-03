import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useActiveHeading } from "@/hooks/useActiveHeading";
import useDrawerTOCState from "@/stores/useDrawerTOCState";
import { TTOCItem } from "@/types/toc.type";
import Link from "next/link";
import { MdMenuBook } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export const DrawerTOC = (props: { data: TTOCItem[] }) => {
  const isTOCOpen = useDrawerTOCState((state) => state.isOpen);
  const setIsTOCOpen = useDrawerTOCState((state) => state.changeDrawerTOCOpen);
  const activeId = useActiveHeading(props.data.map((item) => `#${item.anchorId}`));
  return (
    <Sheet onOpenChange={setIsTOCOpen} open={isTOCOpen}>
      <SheetTrigger
        className="bottom-16 right-5 fixed bg-white dark:bg-black border-gray-700 border dark:border-gray-500 shadow-xl"
        title="Open the table of contents"
      >
        <div className="p-1 font-bold" onClick={() => setIsTOCOpen(!isTOCOpen)} title="Open the table of contents">
          <MdMenuBook className="text-3xl" />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="mt-8 font-bold">{"TABLE OF CONTENTS"}</SheetTitle>
        </SheetHeader>
        <ul className="my-3 flat-scrollbar h-[70vh] flex flex-col overflow-y-auto flat-scrollbar-normal">
          {props.data?.map((item) => (
            <Link
              className={twMerge(
                "border-t border-b py-1 px-2 border-dashed hover:bg-gray-100 hover:dark:bg-gray-900",
                activeId === `#${item.anchorId}` ? "bg-gray-100 dark:bg-gray-900 text-sky-700 dark:text-sky-500" : "",
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
