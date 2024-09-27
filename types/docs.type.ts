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

export type TPostTOCItem = {
  level: number;
  title: string;
  anchorId: string;
};

export type TPostFrontmatter = {
  title: string;
  time: string;
  tags: string[] | null;
  subtitle: string | null;
  summary: string | null;
  coverURL: string | null;
  pin: boolean | null;
  noPrompt: boolean | null;
  allowShare: boolean | null;
  closed: boolean | null;
};

export type TTagListItem = { name: string; count: number };
