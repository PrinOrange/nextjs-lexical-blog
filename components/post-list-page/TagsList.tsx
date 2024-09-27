import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { nanoid } from "nanoid";
import type { TTagListItem } from "@/types/docs.type";

export const TagsList = (props: { tagsList: TTagListItem[] }) => {
  return (
    <Accordion collapsible type="single">
      <AccordionItem className="border-t" value="item-1">
        <AccordionTrigger className="font-bold hover:no-underline">{"TAG FILTER"}</AccordionTrigger>
        <AccordionContent>
          <Separator />
          <div className={"my-5 flex flex-wrap justify-center text-wrap px-2 text-sm"}>
            {props.tagsList.map((item) => (
              <Link
                className="m-1 my-auto p-1 font-bold text-gray-700 underline decoration-2 underline-offset-[5px] hover:text-black dark:text-gray-300 dark:hover:text-white"
                href={`/tags/${item.name}`}
                key={`tags-${nanoid()}`}
              >
                {`${item.name} (${item.count})`}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
