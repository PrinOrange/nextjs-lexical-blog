import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { isEmptyString } from "@/lib/utils";
import { fontFangZhengXiaoBiaoSongCN, fontSourceSerifScreenCN } from "@/styles/font";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { FaCcPaypal } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { SiAlipay, SiWechat } from "react-icons/si";

export default function AboutPage() {
  return (
    <Page>
      <SEO
        title={`${Config.SiteTitle} - Sponsor Me`}
        description={
          "If you like my works, I would deeply appreciate your support as a patron. Your contribution not only fuels my creative journey but also allows me to delve deeper into my passion."
        }
      />
      <NavBar />
      <ContentContainer>
        <div className="md:flex">
          <div className="flex flex-col justify-center md:w-1/2">
            <h2
              className={`my-5 flex justify-center text-2xl font-bold text-red-500 ${fontFangZhengXiaoBiaoSongCN.className}`}
            >
              <GoHeartFill className="mx-2 my-auto" />
              {"SPONSOR"}
            </h2>
            <p className={`${fontSourceSerifScreenCN.className} break-words text-lg`}>
              {
                "If you like my works, I would deeply appreciate your support as a patron. Your contribution not only fuels my creative journey but also allows me to delve deeper into my passion. Your support plays a vital role in making this vision a reality. Thank you for considering becoming a patron and being an integral part of this work endeavor."
              }
              <br />
              <br />
              {"Here are the ways you can become a patron. Thank you for your support!"}
              <br />
              <br />
              {`Yours, ${Config.AuthorName}`}
            </p>
          </div>
          <div className="md:px-15 md:w-1/2">
            <div className="mx-2 my-10 flex flex-col justify-around font-bold">
              {!isEmptyString(Config.SponsorLink?.wechatPay) && (
                <div className="my-3 flex justify-between">
                  <div className="my-auto flex">
                    <SiWechat className="mx-3 my-auto text-5xl text-green-500" />
                    <div className="my-auto">
                      <h3 className="mx-auto text-sm">{"WECHAT-PAY"}</h3>
                    </div>
                  </div>
                  <div className="my-2 bg-white p-1">
                    <QRCodeSVG width={120} value={Config.SponsorLink?.wechatPay!} />
                  </div>
                </div>
              )}
              <hr />
              {!isEmptyString(Config.SponsorLink?.alipay) && (
                <div className="my-6 flex justify-between">
                  <div className="my-auto flex">
                    <SiAlipay className="mx-3 my-auto text-5xl text-blue-500" />
                    <div className="my-auto">
                      <h3 className="mx-auto text-sm">{"ALIPAY"}</h3>
                    </div>
                  </div>
                  <div className="my-2">
                    <Link className="link-button my-auto text-2xl" target="_blank" href={Config.SponsorLink?.alipay!}>
                      {"DONATE"}
                    </Link>
                  </div>
                </div>
              )}
              <hr />
              {!isEmptyString(Config.SponsorLink?.paypal) && (
                <div className="my-6 flex justify-between">
                  <div className="my-auto flex">
                    <FaCcPaypal className="mx-3 my-auto text-5xl text-blue-600" />
                    <div className="my-auto">
                      <h3 className="mx-auto text-sm">{"PAYPAL"}</h3>
                    </div>
                  </div>
                  <div className="my-2">
                    <Link className="link-button my-auto text-2xl" target="_blank" href={Config.SponsorLink?.paypal!}>
                      {"DONATE"}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
