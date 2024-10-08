import { HomeCover } from "@/components/home-page/HomeCover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { PostList } from "@/components/utils/PostList";
import { SEO } from "@/components/utils/SEO";
import { LatestPostCountInHomePage } from "@/consts/consts";
import { Config } from "@/data/config";
import { sortedPosts } from "@/lib/post-process";
import { generateRSSFeed } from "@/lib/rss";
import type { TPostListItem } from "@/types/docs.type";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { LuPenTool } from "react-icons/lu";
import { RiStarFill } from "react-icons/ri";

type HomePageProps = {
  pinnedPostList: TPostListItem[];
  latestPostList: TPostListItem[];
};

export default function Home(props: HomePageProps) {
  return (
    <Page>
      <SEO
        coverURL={Config.PageCovers.websiteCoverURL}
        description={`Welcome to the ${Config.Nickname}'s blog website. It's the website for recording thoughts for technology, life experience and so on.`}
        title={`${Config.SiteTitle} - The personal blog for ${Config.Nickname}`}
      />
      <NavBar />
      <ContentContainer>
        <HomeCover />
        {props.pinnedPostList.length !== 0 && (
          <div>
            <Separator />
            <h2 className={"caption-font my-5 flex justify-center font-bold text-2xl"}>
              <RiStarFill className="mx-2 my-auto" />
              {"PINNED POSTS"}
            </h2>
            <Separator />
            <PostList data={props.pinnedPostList} />
          </div>
        )}
        {props.latestPostList.length !== 0 && (
          <div>
            <Separator />
            <h2 className={"caption-font my-5 flex justify-center font-bold text-2xl"}>
              <LuPenTool className="mx-2 my-auto" />
              {"LATEST POSTS"}
            </h2>
            <Separator />
            <PostList data={props.latestPostList} />
            <Separator />
            <div className="my-5 flex justify-end">
              <Button asChild>
                <Link className="font-bold" href="/posts">
                  {"MORE POSTS >"}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const pinnedPostList = sortedPosts.pinnedPostList;
  const latestPostList = [];

  for (let i = 0, j = 0; j < LatestPostCountInHomePage && i < sortedPosts.allPostList.length; i++) {
    const postListItem = sortedPosts.allPostList[i];
    if (!postListItem.frontMatter.noPrompt) {
      latestPostList.push(postListItem);
      j++;
    }
  }

  if (Config.RSSFeed?.enabled) {
    await generateRSSFeed();
  }

  return {
    props: {
      pinnedPostList: pinnedPostList,
      latestPostList: latestPostList,
    },
  };
};
