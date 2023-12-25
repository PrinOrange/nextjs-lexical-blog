import { TTOCItem } from "@/types/toc.type";
import { JSDOM } from "jsdom";

/**
 * Generate the Table Of Content List by html code.
 * It supports h1-h6 level headings at most.
 * @param htmlCode
 * @returns
 */
export const getTOCTree = (htmlCode: string) => {
  const doc_dom = new JSDOM(htmlCode);
  const all_headers = doc_dom.window.document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  const result: TTOCItem[] = [];
  for (let i = 0; i < all_headers.length; i++) {
    const level = parseInt(all_headers[i].tagName.replace("H", ""));
    result.push({
      level: level,
      anchorId: all_headers[i].id,
      title: all_headers[i].textContent!,
    });
  }
  return result;
};
