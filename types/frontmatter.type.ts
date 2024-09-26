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
