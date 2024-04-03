import { TFrontmatter } from "./frontmatter.type";

export type TPostListItem = {
  id: string;
  frontMatter: TFrontmatter;
};

export type TPostsByTag = {
  [tagName: string]: TPostListItem[];
};
