import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { PostList } from "@/components/utils/PostList";
import { SEO } from "@/components/utils/SEO";
import { PostCountPerPagination } from "@/consts/consts";
import { Config } from "@/data/config";
import { sortedPosts } from "@/lib/post-process";
import { paginateArray } from "@/lib/utils";
import { fontFangZhengXiaoBiaoSongCN } from "@/styles/font";
import { TPostListItem } from "@/types/post-list";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { LuPenTool } from "react-icons/lu";

type PostsPageProps = {
  pageAmount: number;
  pageNumber: number;
  postList: TPostListItem[];
};

export default function PostsPage(props: PostsPageProps) {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<string>(props.pageNumber.toString());

  const handleEnterKeyJump = (event: KeyboardEvent<HTMLInputElement>) => {
    setPageNumber(pageNumber.replace(/[^\d]/g, ""));
    if (parseInt(pageNumber) > 0 && parseInt(pageNumber) < props.pageAmount + 1) {
      (event.key === "Go" || event.key === "Enter") && router.push(`/posts/${pageNumber}`);
      return;
    }
  };

  const handleChangePageNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(event.target.value);
  };

  useEffect(() => {
    setPageNumber(props.pageNumber.toString().replace(/[^\d]/g, ""));
  }, [props.pageNumber]);

  return (
    <Page>
      <SEO
        title={`${Config.SiteTitle} - All published posts`}
        description={"Here is the list page for all published posts. Click here for more details."}
        coverURL={Config.PageCovers.websiteCoverURL}
      />
      <NavBar />
      <ContentContainer>
        <h2 className={`my-5 flex justify-center text-2xl ${fontFangZhengXiaoBiaoSongCN.className} font-bold`}>
          <LuPenTool className="mx-2 my-auto" />
          {"ALL POSTS"}
        </h2>
        <hr />
        <PostList data={props.postList} />
        <div className="my-5 flex justify-between text-base font-bold">
          {props.pageNumber !== 1 && (
            <Button asChild>
              <Link href={`/posts/${props.pageNumber - 1}/`} className="font-bold">
                {"< PREV"}
              </Link>
            </Button>
          )}
          <div className="my-auto font-bold flex justify-center">
            <Input
              onKeyDown={handleEnterKeyJump}
              onChange={handleChangePageNumber}
              className="my-auto mx-2 w-11 h-6"
              value={pageNumber}
            />
            <div className="my-auto">{`  /  ${props.pageAmount}`}</div>
          </div>
          {props.pageNumber !== props.pageAmount && (
            <Button asChild>
              <Link href={`/posts/${props.pageNumber + 1}/`} className="font-bold">
                {"NEXT >"}
              </Link>
            </Button>
          )}
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const allPaths: { params: { slug?: string[] } }[] = [{ params: { slug: [] } }];

  const pageAmount = Math.ceil(sortedPosts.allPostList.length / PostCountPerPagination);

  for (let i = 0; i < pageAmount; i++) {
    allPaths.push({ params: { slug: [(i + 1).toString()] } });
  }

  return { paths: allPaths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async (context) => {
  const params = (context.params?.slug as string[]) ?? [];

  const pageNumber = params[0] ? parseInt(params[0]) : 1;

  let postList: TPostListItem[] = paginateArray(sortedPosts.allPostList, PostCountPerPagination, pageNumber);

  const pageAmount = Math.ceil(sortedPosts.allPostList.length / PostCountPerPagination);

  return {
    props: {
      pageAmount: pageAmount,
      pageNumber: pageNumber,
      postList: postList,
    },
  };
};
