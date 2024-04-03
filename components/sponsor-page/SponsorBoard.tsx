import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Config } from "@/data/config";
import { isEmptyString } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { nanoid } from "nanoid";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCheck, FaCopy } from "react-icons/fa";
import { FaGithub, FaPatreon, FaPaypal } from "react-icons/fa6";
import { SiAlipay, SiWechat } from "react-icons/si";
import { Input } from "../ui/input";

export const SponsorBoard = () => {
  const [isCopiedList, setIsCopiedList] = useState(Config.Sponsor?.Crypto?.map(() => false) ?? []);

  return (
    <Dialog
      onOpenChange={() => {
        setIsCopiedList(Config.Sponsor?.Crypto?.map(() => false) ?? []);
      }}
    >
      <div className="mx-2 my-10 flex flex-col  justify-around space-y-5">
        {Config.Sponsor?.Crypto && (
          <div className="py-3 flex justify-between border-b">
            <div className="my-auto flex">
              <div className="mx-3 my-auto">
                <h3 className="mx-auto text-sm font-bold">{"Crypto"}</h3>
                <div className="text-xs">{"Supports BTC, USDT and ETH."}</div>
              </div>
            </div>
            <div className="my-auto">
              <DialogTrigger>
                <Button className="my-auto font-bold">{"DONATE"}</Button>
              </DialogTrigger>
            </div>
          </div>
        )}
        {Config.Sponsor?.Github && Config.SocialLinks.github && (
          <div className="py-3 flex justify-between border-b">
            <div className="my-auto flex">
              <FaGithub className="mx-3 my-auto text-4xl text-gray-900 dark:text-gray-500" />
              <div className="my-auto">
                <h3 className="mx-auto text-sm font-bold">{"Github Sponsor"}</h3>
              </div>
            </div>
            <div className="my-auto">
              <Button asChild className="my-auto font-bold">
                <Link href={`https://github.com/sponsors/${Config.SocialLinks.github}`} target="_blank">
                  {"DONATE"}
                </Link>
              </Button>
            </div>
          </div>
        )}
        {!isEmptyString(Config.Sponsor?.WechatPayQRCodeContent) && (
          <div className="py-3 flex justify-between border-b">
            <div className="my-auto flex">
              <SiWechat className="mx-3 my-auto text-4xl text-green-500" />
              <div className="my-auto">
                <h3 className="mx-auto text-sm font-bold">{"Wechat Pay"}</h3>
              </div>
            </div>
            <div className="my-auto bg-white p-1">
              <QRCodeSVG height={100} value={Config.Sponsor?.WechatPayQRCodeContent!} width={100} />
            </div>
          </div>
        )}
        {!isEmptyString(Config.Sponsor?.AlipayLink) && (
          <div className="py-3 flex justify-between border-b">
            <div className="my-auto flex">
              <SiAlipay className="mx-3 my-auto text-4xl text-blue-500" />
              <div className="my-auto">
                <h3 className="mx-auto text-sm font-bold">{"Alipay"}</h3>
              </div>
            </div>
            <div className="my-auto">
              <Button asChild className="my-auto font-bold">
                <Link href={Config.Sponsor?.AlipayLink!} target="_blank">
                  {"DONATE"}
                </Link>
              </Button>
            </div>
          </div>
        )}
        {!isEmptyString(Config.Sponsor?.PaypalId) && (
          <div className="py-3 flex justify-between border-b">
            <div className="my-auto flex">
              <FaPaypal className="mx-3 my-auto text-4xl text-blue-600" />
              <div className="my-auto">
                <h3 className="mx-auto text-sm font-bold">{"Paypal"}</h3>
              </div>
            </div>
            <div className="my-auto">
              <Button asChild className="my-auto font-bold">
                <Link href={`https://paypal.me/${Config.Sponsor?.PaypalId}`} target="_blank">
                  {"DONATE"}
                </Link>
              </Button>
            </div>
          </div>
        )}
        {!isEmptyString(Config.Sponsor?.PatreonId) && (
          <div className="py-3 flex justify-between border-b">
            <div className="my-auto flex">
              <FaPatreon className="mx-3 my-auto text-4xl text-gray-500" />
              <div className="my-auto">
                <h3 className="mx-auto text-sm font-bold">{"Patreon"}</h3>
              </div>
            </div>
            <div className="my-2">
              <Button asChild className="my-auto font-bold">
                <Link href={`https://patreon.com/${Config.Sponsor?.PatreonId}`} target="_blank">
                  {"DONATE"}
                </Link>
              </Button>
            </div>
          </div>
        )}
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex">{"CRYPTO"}</DialogTitle>
          </DialogHeader>
          <div>
            <div className="w-full text-sm my-2">
              <div>
                <b>NOTE: </b> Please confirm the corresponding block network and address before transferring money to
                avoid loss.
              </div>
            </div>
            <Separator />
            {Config.Sponsor?.Crypto?.map((cryptoItem, cryptoItemIndex) => (
              <div className="w-full py-3 border-b" key={nanoid()}>
                <div className="my-2 flex space-x-2">
                  <div className="font-bold my-auto text-sm">{`${cryptoItem.Name} - ${cryptoItem.Blockchain}`}</div>
                </div>
                <div className="flex">
                  <Input autoFocus={false} defaultValue={cryptoItem.Address} readOnly />
                  <CopyToClipboard
                    onCopy={() => {
                      const newIsCopiedList = Config.Sponsor?.Crypto?.map(() => false) ?? [];
                      newIsCopiedList[cryptoItemIndex] = true;
                      setIsCopiedList(newIsCopiedList);
                    }}
                    text={cryptoItem.Address}
                  >
                    <Button
                      className={`ml-3 my-auto ${isCopiedList[cryptoItemIndex] && "bg-green-500 hover:bg-green-500"}`}
                      size="sm"
                      type="submit"
                    >
                      <span className="sr-only">{"Copy"}</span>
                      {isCopiedList[cryptoItemIndex] ? <FaCheck className="h-4 w-4" /> : <FaCopy className="h-4 w-4" />}
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};
