import { ContentContainer, Page } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { PostList } from "@/components/utils/PostList";
import { SEO } from "@/components/utils/SEO";
import { PostCountPerPagination } from "@/consts/consts";
import { Config } from "@/data/config";
import { sortedPosts } from "@/lib/post-process";
import { paginateArray } from "@/lib/utils";
import { TPostListItem } from "@/types/post-list";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

type TagsContentPageProps = {
  tagName: string | null;
  postList: TPostListItem[];
  pageAmount: number;
  pageNumber: number;
};

export default function TagsContentPage(props: TagsContentPageProps) {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<string>(props.pageNumber.toString());

  const handleEnterKeyJump = (event: KeyboardEvent<HTMLInputElement>) => {
    setPageNumber(pageNumber.replace(/[^\d]/g, ""));
    if (parseInt(pageNumber) > 0 && parseInt(pageNumber) < props.pageAmount + 1) {
      (event.key === "Go" || event.key === "Enter") && router.push(`/tags/${props.tagName}/${pageNumber}`);
      return;
    }
  };

  const handleInputPageNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(event.target.value);
  };

  useEffect(() => {
    setPageNumber(props.pageNumber.toString());
  }, [props.pageNumber]);

  return (
    <Page>
      <SEO
        coverURL={Config.PageCovers.websiteCoverURL}
        description={`Here are posts under the tag ${props.tagName}.`}
        title={`Tag - ${props.tagName}`}
      />
      <NavBar />
      <ContentContainer>
        <h2 className={"my-5 flex flex-col justify-center text-center font-bold font-fang-zheng-xiao-biao-song"}>
          <div className="mx-auto text-2xl">{`Posts of ${props.tagName}`}</div>
        </h2>
        <Separator />
        <PostList data={props.postList} />
        <Separator />
        <div className="my-5 flex justify-between text-base font-bold">
          {props.pageNumber !== 1 && (
            <Button asChild>
              <Link className="font-bold" href={`/tags/${props.tagName}/${props.pageNumber - 1}/`}>
                {"< PREV"}
              </Link>
            </Button>
          )}
          <div className="my-auto font-bold flex justify-center">
            <Input
              className="my-auto mx-2 w-11 h-6"
              onChange={handleInputPageNumber}
              onKeyDown={handleEnterKeyJump}
              title="Type the specified page number and press Enter to jump."
              value={pageNumber}
            />
            <div className="my-auto">{`  /  ${props.pageAmount}`}</div>
          </div>
          {props.pageNumber !== props.pageAmount && (
            <Button asChild>
              <Link className="font-bold" href={`/tags/${props.tagName}/${props.pageNumber + 1}/`}>
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
  const allPaths: { params: { slug: string[] } }[] = [];

  const allTags = Object.keys(sortedPosts.postsByTag).map((tagName) => ({
    name: tagName,
    count: sortedPosts.postsByTag[tagName].length,
  }));

  for (let i = 0; i < allTags.length; i++) {
    allPaths.push({ params: { slug: [allTags[i].name] } });
    for (let j = 0; j < allTags[i].count; j++) {
      allPaths.push({ params: { slug: [allTags[i].name, (j + 1).toString()] } });
    }
  }

  return { paths: allPaths, fallback: false };
};

export const getStaticProps: GetStaticProps<TagsContentPageProps> = async (context) => {
  const params = (context.params?.slug as string[]) ?? [];

  const tagName = params[0] ?? null;
  const pageNumber = params[1] ? parseInt(params[1]) : 1;
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
