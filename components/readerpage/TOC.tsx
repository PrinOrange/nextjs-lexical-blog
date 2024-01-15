import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActiveHeading } from "@/hooks/useActiveHeading";
import { TTOCItem } from "@/types/toc.type";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Separator } from "../ui/separator";

export const TOC = (props: { data: TTOCItem[] }) => {
  const activeId = useActiveHeading(props.data.map((item) => `#${item.anchorId}`));

  return (
    <Card className="sticky top-[5em] mx-5">
      <CardHeader className="p-3">
        <CardTitle className="text-lg text-center">{"TABLE OF CONTENTS"}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="px-2 py-2 h-[60vh] overflow-y-auto flat-scrollbar-normal">
        <ul>
          {props.data?.map((item) => (
            <Link className={""} href={`#${item.anchorId}`} key={`toc-${item.anchorId}`}>
              <li
                className={twMerge(
                  `py-2 text-sm rounded-lg hover:bg-gray-100 hover:dark:bg-gray-900`,
                  activeId === `#${item.anchorId}` ? "bg-gray-100 dark:bg-gray-900 text-sky-700 dark:text-sky-500" : "",
                )}
                style={{ paddingLeft: `${item.level - 1}em` }}
              >{`${item.title}`}</li>
            </Link>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
