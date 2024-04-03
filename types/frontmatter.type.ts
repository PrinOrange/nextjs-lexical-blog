import { NonEmptyArray } from "./utils.type";

export type TFrontmatter = {
  title: string;
  time: string;
  tags: NonEmptyArray<string> | null;
  subtitle: string | null;
  summary: string | null;
  coverURL: string | null;
  pin: boolean | null;
  noPrompt: boolean | null;
  allowShare: boolean | null;
  closed: boolean | null;
};
