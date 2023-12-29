import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { TagBadge } from "@/components/utils/TagBadge";
import { Config } from "@/data/config";
import { sortedPosts } from "@/lib/post-process";
import { fontFangZhengXiaoBiaoSongCN, fontSourceSerifScreenCN } from "@/styles/font";
import { nanoid } from "nanoid";
import { GetStaticProps } from "next";
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
        <h2 className={`my-5 flex justify-center text-2xl font-bold ${fontFangZhengXiaoBiaoSongCN.className}`}>
          <AiOutlineTags className="mx-2 my-auto" />
          {"ALL TAGS"}
        </h2>
        <div className={`my-5 flex flex-wrap justify-center px-2 ${fontSourceSerifScreenCN.className}`}>
          {props.tagList.map((item) => (
            <TagBadge key={`tag-badge-${nanoid()}`} name={item.name} size="md" count={item.count} />
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
