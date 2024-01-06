import { ContentContainer, Page } from "@/components/layouts/layouts";
import { MDXComponentsSet } from "@/components/mdx";
import { DrawerTOC } from "@/components/readerpage/DrawerTOC";
import { PostComments } from "@/components/readerpage/PostComments";
import { PostCover } from "@/components/readerpage/PostCover";
import { ShareButtons } from "@/components/readerpage/ShareButtons";
import { TOC } from "@/components/readerpage/TOC";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { TagBadge } from "@/components/utils/TagBadge";
import { Config } from "@/data/config";
import { normalizeDate } from "@/lib/date";
import { getPostFileContent, sortedPosts } from "@/lib/post-process";
import { getTOCTree } from "@/lib/toc";
import useDrawerTOCState from "@/stores/useDrawerTOCState";
import { fontFangZhengXiaoBiaoSongCN, fontSourceSerifScreenCN } from "@/styles/font";
import { TFrontmatter } from "@/types/frontmatter.type";
import { TPostListItem } from "@/types/post-list";
import { TTOCItem } from "@/types/toc.type";
import { nanoid } from "nanoid";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { renderToString } from "react-dom/server";
import { useSwipeable } from "react-swipeable";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePresetMinify from "rehype-preset-minify";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkPrism from "remark-prism";

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
        title={`${props.frontMatter.title} - ${Config.SiteTitle}`}
        description={props.frontMatter.summary}
        coverURL={props.frontMatter.coverURL ?? Config.AvatarURL}
      />
      <Toaster />
      <ContentContainer>
        <NavBar />
        <div className="my-5 justify-center md:flex">
          <div className="md:w-2/3">
            <div className="py-1">
              {props.frontMatter.coverURL && <PostCover coverURL={props.frontMatter.coverURL} />}
              <h2
                className={`${fontFangZhengXiaoBiaoSongCN.className} flex justify-center whitespace-normal break-words text-3xl font-bold capitalize`}
              >
                {props.frontMatter?.title}
              </h2>
              {props.frontMatter?.subtitle && (
                <div
                  className={`${fontFangZhengXiaoBiaoSongCN.className} my-1 flex justify-center text-xl font-bold capitalize`}
                >
                  {props.frontMatter.subtitle}
                </div>
              )}
              <div className="my-2 flex justify-center text-sm italic">{normalizeDate(props.frontMatter?.time)}</div>
              {props.frontMatter?.summary && (
                <p className={`${fontSourceSerifScreenCN.className} my-4 indent-8 text-gray-800 dark:text-gray-300`}>
                  {props.frontMatter?.summary}
                </p>
              )}
              {props.frontMatter.tags && (
                <div className={`py-3 flex flex-wrap justify-start border-t border-b`}>
                  <div className="font-bold mr-2 my-1">{"TAGS : "}</div>
                  {props.frontMatter.tags.map((tagName) => (
                    <TagBadge name={tagName} size="sm" key={`tags-${nanoid()}`} />
                  ))}
                </div>
              )}
            </div>
            <div
              className={`typesetting ${fontSourceSerifScreenCN.className} mt-0 mb-10 ${
                !props.frontMatter.allowShare && "select-none"
              }`}
              {...handleRightSwipe}
            >
              {compiledSource && (
                <MDXRemote
                  compiledSource={compiledSource.compiledSource}
                  frontmatter={compiledSource.frontmatter}
                  scope={compiledSource.scope}
                  //@ts-ignore
                  components={MDXComponentsSet}
                />
              )}
            </div>
            <hr />
            <ShareButtons
              subtitle={props.frontMatter.subtitle}
              title={props.frontMatter.title}
              quote={props.frontMatter.summary}
              postId={props.postId}
              allowShare={props.frontMatter.allowShare}
            />
            <hr />
            <ul className="my-2 px-5 flex flex-col justify-center list-disc">
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
            <PostComments postId={props.postId} />
          </div>
          {isTOCLongEnough && (
            <div className="hidden md:block md:w-1/3">
              <TOC data={props.tocList} />
            </div>
          )}
        </div>
        {isTOCLongEnough && (
          <div className="md:hidden">
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
      remarkPlugins: [remarkPrism, externalLinks, remarkMath, remarkGfm],
      rehypePlugins: [rehypeRaw, rehypeKatex as any, rehypeAutolinkHeadings, rehypeSlug, rehypePresetMinify],
      format: "md",
    },
  });

  const tocList = getTOCTree(renderToString(<MDXRemote {...mdxSource} />));

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
