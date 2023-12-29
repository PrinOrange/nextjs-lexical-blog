import { RSSFeedURL, WebsiteURL } from "@/consts/consts";
import { Config } from "@/data/config";
import { NextSeo } from "next-seo";

export const SEO = (props: { title: string; description?: string | null; coverURL?: string | null }) => {
  return (
    <>
      <title>{props.title}</title>
      <link rel="alternate" type="application/rss+xml" href={RSSFeedURL} />
      <NextSeo
        title={props.title}
        description={props.description ?? Config.Sentence}
        openGraph={{
          title: props.title,
          description: props.description ?? Config.Sentence,
          images: props.coverURL
            ? [
                {
                  url: props.coverURL,
                  width: 850,
                  height: 650,
                  alt: props.title,
                },
              ]
            : [
                {
                  url: Config.PageCovers.websiteCoverURL,
                  width: 850,
                  height: 650,
                  alt: props.title,
                },
              ],
        }}
        twitter={{
          handle: `@${Config.SocialLinks.twitter}`,
          site: WebsiteURL,
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};
