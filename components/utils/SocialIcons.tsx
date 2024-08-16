import { Config } from "@/data/config";
import Link from "next/link";
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
    <div className="my-5 flex flex-wrap justify-center space-x-4 font-bold text-2xl">
      {Config.SocialLinks.twitter && (
        <Link href={`https://x.com/${Config.SocialLinks.twitter}`} target="_blank" title="Twitter">
          <FiTwitter className="hover:text-sky-500" />
        </Link>
      )}
      {Config.SocialLinks.mastodon && (
        <Link href={Config.SocialLinks.mastodon} target="_blank" title="Mastodon">
          <TbBrandMastodon className="hover:text-purple-500" />
        </Link>
      )}
      {Config.SocialLinks.bilibili && (
        <Link href={`https://space.bilibili.com/${Config.SocialLinks.bilibili}`} target="_blank" title="Bilibili">
          <TbBrandBilibili className="hover:text-sky-500" />
        </Link>
      )}
      {Config.SocialLinks.reddit && (
        <Link href={`https://reddit.com/user/${Config.SocialLinks.reddit}`} target="_blank" title="Reddit">
          <TbBrandReddit className="hover:text-red-500" />
        </Link>
      )}
      {Config.SocialLinks.youtube && (
        <Link href={`https://youtube.com/@${Config.SocialLinks.youtube}`} target="_blank" title="Youtube">
          <TbBrandYoutube className="hover:text-red-500" />
        </Link>
      )}
      {Config.SocialLinks.instagram && (
        <Link href={`https://instagram.com/${Config.SocialLinks.instagram}`} target="_blank" title="Instagram">
          <FiInstagram className="hover:text-orange-500" />
        </Link>
      )}
      {Config.SocialLinks.facebook && (
        <Link href={`https://instagram.com/${Config.SocialLinks.facebook}`} target="_blank" title="Facebook">
          <TbBrandFacebook className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.linkedin && (
        <Link href={`https://linkedin.com/in/${Config.SocialLinks.linkedin}`} target="_blank" title="LinkedIn">
          <TbBrandLinkedin className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.youtube && (
        <Link href={`https://youtube.com/@${Config.SocialLinks.youtube}`} target="_blank" title="Youtube">
          <TbBrandYoutube className="hover:text-red-500" />
        </Link>
      )}
      {Config.SocialLinks.telegram && (
        <Link href={`https://t.me/${Config.SocialLinks.telegram}`} target="_blank" title="Telegram">
          <TbBrandTelegram className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.github && (
        <Link href={`https://github.com/${Config.SocialLinks.github}`} target="_blank" title="Github">
          <FiGithub className="hover:text-gray-500" />
        </Link>
      )}
      <Link href={`mailto:${Config.SocialLinks.email}`} target="_blank" title="EMail Address">
        <FiMail className="hover:text-gray-500" />
      </Link>
    </div>
  );
};
