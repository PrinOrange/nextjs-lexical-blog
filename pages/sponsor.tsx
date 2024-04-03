import { ContentContainer, Page } from "@/components/layouts";
import { SponsorBoard } from "@/components/sponsor-page/SponsorBoard";
import { SponsorDescription } from "@/components/sponsor-page/SponsorDescription";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { GoHeartFill } from "react-icons/go";

export default function AboutPage() {
  return (
    <Page>
      <SEO
        description={
          "If you like my works, I would deeply appreciate your support as a patron. Your contribution not only fuels my creative journey but also allows me to delve deeper into my passion."
        }
        title={`${Config.SiteTitle} - Sponsor Me`}
      />
      <Toaster />
      <NavBar />
      <ContentContainer>
        <div className="md:flex mt-10">
          <div className="flex flex-col justify-center md:w-1/2">
            <h2 className={`my-5 flex justify-center text-2xl font-bold text-red-500 font-fang-zheng-xiao-biao-song`}>
              <GoHeartFill className="mx-2 my-auto" />
              {"SPONSOR"}
            </h2>
            <SponsorDescription />
          </div>
          <div className="md:px-15 md:w-1/2">
            <SponsorBoard />
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
