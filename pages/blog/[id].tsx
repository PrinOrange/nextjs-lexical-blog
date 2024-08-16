import { MDXComponentsSet } from "@/components/mdx";
import { BottomCard } from "@/components/reader-page/BottomCard";
import { DrawerTOC } from "@/components/reader-page/DrawerTOC";
import { PostComments } from "@/components/reader-page/PostComments";
import { PostCover } from "@/components/reader-page/PostCover";
import { ShareButtons } from "@/components/reader-page/ShareButtons";
import { TOC } from "@/components/reader-page/TOC";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { normalizeDate } from "@/lib/date";
import { getPostFileContent, sortedPosts } from "@/lib/post-process";
import { makeTOCTree } from "@/lib/toc";
import useDrawerTOCState from "@/stores/useDrawerTOCState";
import type { TFrontmatter } from "@/types/frontmatter.type";
import type { TPostListItem } from "@/types/post-list";
import type { TTOCItem } from "@/types/toc.type";
import { nanoid } from "nanoid";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { renderToString } from "react-dom/server";
import { useSwipeable } from "react-swipeable";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypePresetMinify from "rehype-preset-minify";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type ReaderPageProps = {
  compiledSource: MDXRemoteSerializeResult;
  tocList: TTOCItem[];
  frontMatter: TFrontmatter;
  postId: string;
  nextPostListItem: TPostListItem | null;
  prevPostListItem: TPostListItem | null;
};

const ReaderPage = (props: ReaderPageProps) => {
  const compiledSource = props.compiledSource;
  const setIsTOCOpen = useDrawerTOCState((state) => state.changeDrawerTOCOpen);

  // Only the TOC length reaches 3 can be displayed.
  // In order to avoid large blank spaces that ruin the visual perception
  const isTOCLongEnough = props.tocList.length > 2;
  const handleRightSwipe = useSwipeable({
    onSwipedRight: () => {
      isTOCLongEnough && setIsTOCOpen(true);
    },
    delta: 150,
  });

  return (
    <Page>
      <SEO
        coverURL={props.frontMatter.coverURL ?? Config.AvatarURL}
        description={props.frontMatter.summary}
        title={`${props.frontMatter.title} - ${Config.SiteTitle}`}
      />
      <Toaster />
      <NavBar />
      <ContentContainer>
        <div
          className={`py-1 ${isTOCLongEnough ? "justify-between" : "justify-center"} space-x-5 lg:flex`}
          style={{ borderRadius: "5px" }}
        >
          <div className={`${isTOCLongEnough ? "lg:w-2/3" : "lg:w-5/6"} py-5`}>
            <div className="typesetting">
              {props.frontMatter.coverURL && <PostCover coverURL={props.frontMatter.coverURL} />}
              <div className="border-black border-b-2 pb-1 dark:border-gray-300">
                <div
                  className={
                    "caption-font my-2 flex justify-center whitespace-normal break-words font-bold text-3xl text-black capitalize dark:text-white"
                  }
                >
                  {props.frontMatter?.title}
                </div>
                {props.frontMatter?.subtitle && (
                  <div className={"caption-font my-1 flex justify-center font-bold text-xl capitalize"}>
                    {props.frontMatter.subtitle}
                  </div>
                )}
                <div className="my-1 flex justify-center text-sm italic">{normalizeDate(props.frontMatter?.time)}</div>
                {props.frontMatter?.summary && (
                  <p className={"my-4 indent-8 text-gray-800 content-font dark:text-gray-300"}>
                    {props.frontMatter?.summary}
                  </p>
                )}
                {props.frontMatter.tags && (
                  <div className={"flex flex-wrap border-black border-t-2 pt-1 dark:border-gray-300"}>
                    {props.frontMatter.tags.map((tagName) => (
                      <Link
                        className="not-prose my-1 mr-2 border-2 border-black px-2 py-1 font-bold text-gray-700 text-xs hover:text-black dark:border-gray-300 dark:text-gray-300 dark:hover:text-gray-200"
                        href={`/tags/${tagName}`}
                        key={`tags-${nanoid()}`}
                      >
                        {tagName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div
                className={`text-wrap border-gray-500 content-font ${
                  !props.frontMatter.allowShare ? "select-none" : ""
                }`}
                {...handleRightSwipe}
              >
                {compiledSource && (
                  <MDXRemote
                    compiledSource={compiledSource.compiledSource}
                    // @ts-ignore
                    components={MDXComponentsSet}
                    frontmatter={compiledSource.frontmatter}
                    scope={compiledSource.scope}
                  />
                )}
              </div>
            </div>
            <Separator />
            <BottomCard />
            <Separator />
            <ShareButtons
              allowShare={props.frontMatter.allowShare}
              postId={props.postId}
              quote={props.frontMatter.summary}
              subtitle={props.frontMatter.subtitle}
              title={props.frontMatter.title}
            />
            <Separator />
            <ul className="my-5 flex list-disc flex-col justify-center px-5">
              {props.prevPostListItem && (
                <li className="my-1">
                  <Link
                    className=" hover:text-sky-600 dark:hover:text-sky-500"
                    href={`/blog/${props.prevPostListItem?.id}`}
                  >
                    {props.prevPostListItem?.frontMatter.title}
                  </Link>
                </li>
              )}
              {props.nextPostListItem && (
                <li className="my-1">
                  <Link
                    className=" hover:text-sky-600 dark:hover:text-sky-500"
                    href={`/blog/${props.nextPostListItem?.id}`}
                  >
                    {props.nextPostListItem?.frontMatter.title}
                  </Link>
                </li>
              )}
            </ul>
            {Config.Giscus?.enabled && <PostComments postId={props.postId} />}
          </div>
          {isTOCLongEnough && (
            <div className="hidden py-5 md:w-1/3 lg:block">
              <div className="sticky top-[5em]">
                <TOC data={props.tocList} />
              </div>
            </div>
          )}
        </div>
        {isTOCLongEnough && (
          <div className="lg:hidden">
            <DrawerTOC data={props.tocList} />
          </div>
        )}
      </ContentContainer>
      <Footer />
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const allPaths = sortedPosts.allPostList.map((item) => ({
    params: { id: item.id },
  }));
  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ReaderPageProps> = async (context) => {
  const postId = context.params?.id;

  if (postId == null || Array.isArray(postId)) {
    return { notFound: true };
  }

  const source = getPostFileContent(postId);

  if (source == null) {
    return { notFound: true };
  }

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [externalLinks, remarkMath, remarkGfm],
      rehypePlugins: [
        rehypeRaw,
        rehypeKatex as any,
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypePresetMinify.plugins,
        () => rehypeHighlight({ detect: true }),
      ],
      format: "md",
    },
  });

  const tocList = makeTOCTree(renderToString(<MDXRemote {...mdxSource} />));

  const postIndexInAllPosts = sortedPosts.allPostList.findIndex((item) => item.id === postId);

  const frontMatter: TFrontmatter = sortedPosts.allPostList[postIndexInAllPosts].frontMatter;

  const nextPostListItem =
    postIndexInAllPosts !== sortedPosts.allPostList.length - 1
      ? sortedPosts.allPostList[postIndexInAllPosts + 1]
      : null;

  const prevPostListItem = postIndexInAllPosts !== 0 ? sortedPosts.allPostList[postIndexInAllPosts - 1] : null;

  return {
    props: {
      compiledSource: mdxSource,
      tocList: tocList,
      frontMatter: frontMatter,
      postId: postId,
      nextPostListItem: nextPostListItem,
      prevPostListItem: prevPostListItem,
    },
  };
};

export default ReaderPage;
