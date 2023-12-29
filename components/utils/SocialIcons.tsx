import { Config } from "@/data/config";
import Link from "next/link";
import { FiGithub, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";
import { TbBrandFacebook, TbBrandLinkedin, TbBrandMastodon } from "react-icons/tb";

export const SocialIcons = () => {
  return (
    <div className="my-5 flex justify-center space-x-4 text-2xl font-bold">
      {Config.SocialLinks.twitter && (
        <Link target="_blank" href={`https://x.com/${Config.SocialLinks.twitter}`} title="Twitter">
          <FiTwitter className="hover:text-sky-500" />
        </Link>
      )}
      {Config.SocialLinks.mastodon && (
        <Link target="_blank" href={Config.SocialLinks.mastodon} title="Mastodon">
          <TbBrandMastodon className="hover:text-purple-500" />
        </Link>
      )}
      {Config.SocialLinks.instagram && (
        <Link target="_blank" href={`https://instagram.com/${Config.SocialLinks.instagram}`} title="Instagram">
          <FiInstagram className="hover:text-orange-500" />
        </Link>
      )}
      {Config.SocialLinks.facebook && (
        <Link target="_blank" href={`https://instagram.com/${Config.SocialLinks.facebook}`} title="Instagram">
          <TbBrandFacebook className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.linkedin && (
        <Link target="_blank" href={`https://linkedin.com/in/${Config.SocialLinks.linkedin}`} title="Instagram">
          <TbBrandLinkedin className="hover:text-blue-500" />
        </Link>
      )}
      {Config.SocialLinks.github && (
        <Link target="_blank" href={`https://github.com/${Config.SocialLinks.github}`} title="Github">
          <FiGithub className="hover:text-gray-500" />
        </Link>
      )}
      <Link target="_blank" href={`mailto:${Config.SocialLinks.email}`} title="EMail Address">
        <FiMail className="hover:text-gray-500" />
      </Link>
    </div>
  );
};
