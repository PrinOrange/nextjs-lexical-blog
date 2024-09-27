import { Introduction } from "@/components/about-page/Introduction";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { PageTitle } from "@/components/utils/PageTitle";
import { SEO } from "@/components/utils/SEO";
import { SocialIcons } from "@/components/utils/SocialIcons";
import { Config } from "@/data/config";

import Link from "next/link";

export default function AboutPage() {
  return (
    <Page>
      <SEO
        coverURL={Config.PageCovers.websiteCoverURL}
        description={"Type your brief self-introduction in a sentence here make SEO recognize it easily."}
        title={`About Me - ${Config.AuthorName}`}
      />
      <NavBar />
      <ContentContainer>
        <PageTitle>{"ABOUT ME"}</PageTitle>
        <Separator />
        <Introduction />
        <Separator />
        <SocialIcons />
        <Separator />

        <ul className="mx-auto my-10 list-disc px-5 md:w-2/3">
          {Config.SocialLinks.github && (
            <li className="my-2">
              {"📕 Check out my github profile at "}
              <Link className="underline" href={`https://github.com/${Config.SocialLinks.github}`} target="_blank">
                Github
              </Link>
            </li>
          )}
          <li className="my-2">🖥️ Programming stack: TypeScript, JavaScript, C++, C, Rust, Go and so on.</li>
          <li className="my-2">🤝 I am looking for friends who are fund of XXXX</li>
          {Config.SocialLinks.twitter && (
            <li className="my-2">
              {"📫 How to reach me on Twitter: "}
              <Link className="link" href={`https://twitter.com/${Config.SocialLinks.twitter}`} target="_blank">
                {Config.SocialLinks.twitter}
              </Link>
            </li>
          )}
          <li className="my-2">Language : 汉语 / English / 한국어 / 日本語 </li>
          <li className="my-2">Gender Identity : Male / Female / MTF / FTM / And Others </li>
          <li className="my-2">From : Your Country, State / Province</li>
        </ul>

        <div className="mx-auto my-10 font-bold md:w-2/3">
          {
            "** In addition to the above content, you can also add other customized components, content, etc. to this page. **"
          }
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
