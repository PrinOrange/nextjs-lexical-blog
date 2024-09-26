import type { TPostFrontmatter } from "./frontmatter.type";

export type TPostListItem = {
  id: string;
  frontMatter: TPostFrontmatter;
};

export type TPostsByTag = {
  [tagName: string]: TPostListItem[];
};

export type TSearchResultItem = {
  id: string;
  title: string;
  summary: string | null;
  tags: string[] | null;
};

export type TTOCItem = {
  level: number;
  title: string;
  anchorId: string;
};
