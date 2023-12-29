import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { FriendsList } from "@/data/friends";
import { fontFangZhengXiaoBiaoSongCN, fontSourceSerifScreenCN } from "@/styles/font";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function FriendsPage() {
  return (
    <Page>
      <SEO title={`${Config.SiteTitle} - Friends`} description={"My Friend Links"} />
      <NavBar />
      <ContentContainer>
        <h2 className={`my-5 flex justify-center text-2xl font-bold ${fontFangZhengXiaoBiaoSongCN.className}`}>
          {"FRIENDS"}
        </h2>
        <hr />
        <div className={`my-5 py-3 flex flex-wrap justify-center text-2xl ${fontSourceSerifScreenCN.className}`}>
          {FriendsList.map((item) => (
            <Link className="mx-3 p-2 underline" href={item.url} key={nanoid()}>
              {item.title}
            </Link>
          ))}
        </div>
        <hr />
        <div className="my-3 text-base flex-col flex justify-start">
          <div className="mx-auto">
            {"Welcome to exchange our friend links and every high-quality blog websites are welcomed. "}
            <Link className="underline" href={`mailto:${Config.SocialLinks.email}`}>
              {"Email me please"}
            </Link>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
