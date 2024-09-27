import { Separator } from "@/components/ui/separator";
import { Config } from "@/data/config";
import { FriendsList } from "@/data/friends";
import type { TFriendItem } from "@/types/friend.type";
import { nanoid } from "nanoid";
import Link from "next/link";

export const FriendLinkList = (props: { friends: TFriendItem[] }) => {
  return (
    <div>
      <div className={"my-5 flex flex-wrap justify-center text-2xl content-font"}>
        {FriendsList.map((item) => (
          <Link className="mx-2 p-2 underline underline-offset-4" href={item.url} key={nanoid()} target="_blank">
            {item.title}
          </Link>
        ))}
      </div>
      <Separator />
      <div className="my-2 flex flex-col justify-start text-base">
        <div className="mx-auto">
          {"Welcome to exchange our friend links and every high-quality blog websites are welcomed. "}
          <Link className="underline" href={`mailto:${Config.SocialLinks.email}`}>
            {"Email me please"}
          </Link>
        </div>
      </div>
    </div>
  );
};
