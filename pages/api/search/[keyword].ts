import { SearchIndex } from "@/lib/search";
import { isEmptyString } from "@/lib/utils";
import { TSearchResultItem } from "@/types/search-result";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = TSearchResultItem[];

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const searchText = req.query.keyword as string;
  if (isEmptyString(searchText)) {
    res.status(200).json([]);
    return;
  }
  if (searchText.length < 4) {
    res.status(200).json([]);
    return;
  }
  const result: TSearchResultItem[] = SearchIndex.search(searchText).map((item) => ({
    id: item.id,
    title: item.title,
    tags: item.tags,
  }));
  res.status(200).json(result);
}
