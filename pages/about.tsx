import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { SocialIcons } from "@/components/utils/SocialIcons";
import { Config } from "@/data/config";
import { fontFangZhengXiaoBiaoSongCN, fontSourceSerifScreenCN } from "@/styles/font";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Page>
      <SEO
        title={`About Me - ${Config.AuthorName}`}
        description={"Type your brief self-introduction in a sentence here make SEO recognize it easily."}
        coverURL={Config.PageCovers.websiteCoverURL}
      />
      <NavBar />
      <ContentContainer>
        <h2 className={`my-5 flex justify-around text-2xl font-bold ${fontFangZhengXiaoBiaoSongCN.className}`}>
          {"ABOUT ME"}
        </h2>
        <hr />
        <div className={`${fontSourceSerifScreenCN.className} my-5 justify-center md:flex md:space-x-10`}>
          <div className="my-auto flex md:w-1/3">
            <img alt="my-profile" className="mx-auto my-auto max-h-[23rem] rounded-lg" src="/images/profile.webp" />
          </div>
          <div className="my-auto md:w-1/3">
            <div className="mt-5 mb-3 text-3xl font-bold">Hi, there👋</div>
            I am a student / entrepreneur / engineer (Your profession) majoring in (Your Research Field) born in XXXX
            (Your birth year)
            <br />
            <br />
            My main research interests includes XXXX
            <br />
            <br />
            Additionally, I am also interested in XXXX.
          </div>
        </div>
        <hr />
        <SocialIcons />
        <hr />

        <ul className="mx-auto my-10 md:w-2/3 list-disc">
          {Config.SocialLinks.github && (
            <li className="my-2">
              {"📕 Check out my github profile at "}
              <Link target="_blank" className="underline" href={`https://github.com/${Config.SocialLinks.github}`}>
                Github
              </Link>
            </li>
          )}
          <li className="my-2">🖥️ Programming stack: TypeScript, JavaScript, C++, C, Rust, Go and so on.</li>
          <li className="my-2">🤝 I am looking for friends who are fund of XXXX</li>
          {Config.SocialLinks.twitter && (
            <li className="my-2">
              {"📫 How to reach me on Twitter: "}
              <Link target="_blank" className="link" href={`https://twitter.com/${Config.SocialLinks.twitter}`}>
                {Config.SocialLinks.twitter}
              </Link>
            </li>
          )}
          <li className="my-2">Language : 汉语 / English / 한국어 / 日本語 </li>
          <li className="my-2">Gender Identity : Male / Female / MTF / FTM / And Others </li>
          <li className="my-2">From : Your Country, State / Province</li>
        </ul>

        <div className="mx-auto my-10 md:w-2/3 font-bold">
          {
            "** In addition to the above content, you can also add other customized components, content, etc. to this page. **"
          }
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
