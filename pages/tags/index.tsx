import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { sortedPosts } from "@/lib/post-process";
import { fontFzxbs, fontSypxzs } from "@/styles/font";
import { nanoid } from "nanoid";
import { GetStaticProps } from "next";
import Link from "next/link";
import { AiOutlineTags } from "react-icons/ai";

type TagsIndexPageProps = {
  tagList: { name: string; count: number }[];
};

export default function TagsIndexPage(props: TagsIndexPageProps) {
  return (
    <Page>
      <SEO
        title={`${Config.SiteTitle} - All tags`}
        description={"Here is the list page for all tags which sorts all posts to every catagories."}
        coverURL={Config.PageCovers.websiteCoverURL}
      />
      <NavBar />
      <ContentContainer>
        <h2 className={`my-5 flex justify-center text-2xl font-bold ${fontFzxbs.className}`}>
          <AiOutlineTags className="mx-2 my-auto" />
          {"ALL TAGS"}
        </h2>
        <div className={`my-5 flex flex-wrap justify-center px-2 ${fontSypxzs.className}`}>
          {props.tagList.map((item) => (
            <Link key={`tag-link-${nanoid()}`} href={`/tags/${item.name}`} className="tag-link m-2 text-base">
              {`${item.name} (${item.count})`}
            </Link>
          ))}
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<TagsIndexPageProps> = async (context) => {
  const tagList: {
    name: string;
    count: number;
  }[] = Object.keys(sortedPosts.tagSubPostSet).map((tagName) => ({
    name: tagName,
    count: sortedPosts.tagSubPostSet[tagName].length,
  }));

  return {
    props: {
      tagList: tagList,
    },
  };
};
