import { ContentContainer, Page } from "@/components/layouts";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { FriendsList } from "@/data/friends";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function FriendsPage() {
  return (
    <Page>
      <SEO description={"My Friend Links"} title={`${Config.SiteTitle} - Friends`} />
      <NavBar />
      <ContentContainer>
        <h2 className={`my-5 flex justify-center text-2xl font-bold font-fang-zheng-xiao-biao-song`}>{"FRIENDS"}</h2>
        <Separator />
        <div className={`my-5 flex flex-wrap justify-center text-2xl font-source-serif-screen`}>
          {FriendsList.map((item) => (
            <Link className="mx-2 p-2 underline" href={item.url} key={nanoid()}>
              {item.title}
            </Link>
          ))}
        </div>
        <Separator />
        <div className="my-2 text-base flex-col flex justify-start">
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
