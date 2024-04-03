import { Config } from "@/data/config";
import Link from "next/link";
import { FiGithub, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import { TbBrandFacebook, TbBrandLinkedin, TbBrandMastodon } from "react-icons/tb";

export const SocialIcons = () => {
  return (
    <div className="my-5 flex justify-center space-x-4 text-2xl font-bold">
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
      {Config.SocialLinks.instagram && (
        <Link href={`https://instagram.com/${Config.SocialLinks.instagram}`} target="_blank" title="Instagram">
          <FiInstagram className="hover:text-orange-500" />
        </Link>
      )}
      {Config.SocialLinks.facebook && (
        <Link href={`https://instagram.com/${Config.SocialLinks.facebook}`} target="_blank" title="Instagram">
          <TbBrandFacebook className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.linkedin && (
        <Link href={`https://linkedin.com/in/${Config.SocialLinks.linkedin}`} target="_blank" title="Instagram">
          <TbBrandLinkedin className="hover:text-blue-500" />
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
