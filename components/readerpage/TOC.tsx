import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TTOCItem } from "@/types/toc.type";
import Link from "next/link";
import { Separator } from "../ui/separator";

export const TOC = (props: { data: TTOCItem[] }) => {
  return (
    <Card className="sticky top-[5em] mx-5">
      <CardHeader className="p-3">
        <CardTitle className="text-lg text-center">{"TABLE OF CONTENTS"}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="px-1 py-2 h-[60vh] overflow-y-auto flat-scrollbar-normal">
        <ul>
          {props.data?.map((item) => (
            <Link className="hover:text-sky-500" href={`#${item.anchorId}`} key={`toc-${item.anchorId}`}>
              <li
                className="my-2 text-sm target:text-blue-500"
                style={{ paddingLeft: `${item.level - 1}em` }}
              >{`${item.title}`}</li>
            </Link>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
