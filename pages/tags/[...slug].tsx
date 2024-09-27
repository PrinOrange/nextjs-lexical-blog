import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { PageTitle } from "@/components/utils/PageTitle";
import { Pagination } from "@/components/utils/Pagination";
import { PostList } from "@/components/utils/PostList";
import { SEO } from "@/components/utils/SEO";
import { PostCountPerPagination } from "@/consts/consts";
import { Config } from "@/data/config";
import { sortedPosts } from "@/lib/post-process";
import { paginateArray } from "@/lib/utils";
import type { TPostListItem } from "@/types/docs.type";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type TagsContentPageProps = {
  tagName: string | null;
  postList: TPostListItem[];
  pageAmount: number;
  pageNumber: number;
};

export default function TagsContentPage(props: TagsContentPageProps) {
  const router = useRouter();
  const handleChangePage = (pageNumber: number) => {
    router.push(`/tags/${props.tagName}/${pageNumber}/`);
  };

  return (
    <Page>
      <SEO
        coverURL={Config.PageCovers.websiteCoverURL}
        description={`Here are posts under the tag ${props.tagName}.`}
        title={`Tag - ${props.tagName}`}
      />
      <NavBar />
      <ContentContainer>
        <PageTitle>{`Posts of ${props.tagName}`}</PageTitle>
        <Separator />
        <PostList data={props.postList} />
        <Separator />
        <Pagination
          onGotoNextPage={(nextPage) => handleChangePage(nextPage)}
          onGotoPrevPage={(prevPage) => handleChangePage(prevPage)}
          onJumpToSpecPage={(pageNum) => handleChangePage(pageNum)}
          pageNumber={props.pageNumber}
          pageAmount={props.pageAmount}
        />
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const allPaths: { params: { slug: string[] } }[] = [];

  const allTags = Object.keys(sortedPosts.postsByTag).map((tagName) => ({
    name: tagName,
    count: sortedPosts.postsByTag[tagName].length,
  }));

  for (let i = 0; i < allTags.length; i++) {
    allPaths.push({ params: { slug: [allTags[i].name] } });
    for (let j = 0; j < allTags[i].count; j++) {
      allPaths.push({
        params: { slug: [allTags[i].name, (j + 1).toString()] },
      });
    }
  }

  return { paths: allPaths, fallback: false };
};

export const getStaticProps: GetStaticProps<TagsContentPageProps> = async (context) => {
  const params = (context.params?.slug as string[]) ?? [];

  const tagName = params[0] ?? null;
  const pageNumber = params[1] ? Number.parseInt(params[1]) : 1;
  let postList: TPostListItem[] = [];

  postList = paginateArray(sortedPosts.postsByTag[tagName], PostCountPerPagination, pageNumber);

  const pageAmount = Math.ceil(sortedPosts.postsByTag[tagName].length / PostCountPerPagination);

  return {
    props: {
      tagName: tagName,
      pageAmount: pageAmount,
      pageNumber: pageNumber,
      postList: postList,
    },
  };
};
