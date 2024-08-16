import { Config } from "@/data/config";
import Link from "next/link";
import { FaQuora, FaWeibo } from "react-icons/fa";
import { FiGithub, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import {
  TbBrandBilibili,
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandMastodon,
  TbBrandReddit,
  TbBrandTelegram,
  TbBrandYoutube,
} from "react-icons/tb";

export const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center font-bold text-2xl">
      {Config.SocialLinks.twitter && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://x.com/${Config.SocialLinks.twitter}`}
          target="_blank"
          title="Twitter"
        >
          <FiTwitter className="hover:text-sky-500" />
        </Link>
      )}
      {Config.SocialLinks.mastodon && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={Config.SocialLinks.mastodon}
          target="_blank"
          title="Mastodon"
        >
          <TbBrandMastodon className="hover:text-purple-500" />
        </Link>
      )}
      {Config.SocialLinks.bilibili && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://space.bilibili.com/${Config.SocialLinks.bilibili}`}
          target="_blank"
          title="Bilibili"
        >
          <TbBrandBilibili className="hover:text-sky-500" />
        </Link>
      )}
      {Config.SocialLinks.weibo && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://weibo.com/u/${Config.SocialLinks.weibo}`}
          target="_blank"
          title="Weibo"
        >
          <FaWeibo className="hover:text-red-500" />
        </Link>
      )}
      {Config.SocialLinks.reddit && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://reddit.com/user/${Config.SocialLinks.reddit}`}
          target="_blank"
          title="Reddit"
        >
          <TbBrandReddit className="hover:text-red-500" />
        </Link>
      )}
      {Config.SocialLinks.youtube && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://youtube.com/@${Config.SocialLinks.youtube}`}
          target="_blank"
          title="Youtube"
        >
          <TbBrandYoutube className="hover:text-red-500" />
        </Link>
      )}
      {Config.SocialLinks.instagram && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://instagram.com/${Config.SocialLinks.instagram}`}
          target="_blank"
          title="Instagram"
        >
          <FiInstagram className="hover:text-orange-500" />
        </Link>
      )}
      {Config.SocialLinks.facebook && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://instagram.com/${Config.SocialLinks.facebook}`}
          target="_blank"
          title="Facebook"
        >
          <TbBrandFacebook className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.quora && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://quora.com/profile/${Config.SocialLinks.quora}`}
          target="_blank"
          title="Quora"
        >
          <FaQuora className="hover:text-red-500" />
        </Link>
      )}
      {Config.SocialLinks.linkedin && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://linkedin.com/in/${Config.SocialLinks.linkedin}`}
          target="_blank"
          title="LinkedIn"
        >
          <TbBrandLinkedin className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.telegram && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://t.me/${Config.SocialLinks.telegram}`}
          target="_blank"
          title="Telegram"
        >
          <TbBrandTelegram className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.github && (
        <Link
          className="flex w-1/5 basis-0 justify-center p-2"
          href={`https://github.com/${Config.SocialLinks.github}`}
          target="_blank"
          title="Github"
        >
          <FiGithub className="hover:text-gray-500" />
        </Link>
      )}
      <Link
        className="flex w-1/5 basis-0 justify-center p-2"
        href={`mailto:${Config.SocialLinks.email}`}
        target="_blank"
        title="EMail Address"
      >
        <FiMail className="hover:text-gray-500" />
      </Link>
    </div>
  );
};
