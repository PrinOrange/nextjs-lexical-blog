import { FriendLinkList } from "@/components/friend-links-page/FriendLinksList";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { PageTitle } from "@/components/utils/PageTitle";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { FriendsList } from "@/data/friends";

export default function FriendsPage() {
  return (
    <Page>
      <SEO description={"My Friend Links"} title={`${Config.SiteTitle} - Friends`} />
      <NavBar />
      <ContentContainer>
        <PageTitle>{"FRIENDS"}</PageTitle>
        <Separator />
        <FriendLinkList friends={FriendsList} />
      </ContentContainer>
      <Footer />
    </Page>
  );
}
