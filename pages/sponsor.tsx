import { SponsorBoard } from "@/components/sponsor-page/SponsorBoard";
import { SponsorDescription } from "@/components/sponsor-page/SponsorDescription";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { GoHeartFill } from "react-icons/go";

export default function SponsorPage() {
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
        <div className="mt-10 md:flex">
          <div className="flex flex-col justify-center md:w-1/2">
            <h2 className={"caption-font my-5 flex justify-center font-bold text-2xl text-red-500"}>
              <GoHeartFill className="mx-2 my-auto" />
              {"SPONSOR"}
            </h2>
            <SponsorDescription />
          </div>
          <div className="md:w-1/2 md:px-15">
            <SponsorBoard />
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
