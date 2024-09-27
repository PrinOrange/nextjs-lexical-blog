import { Config } from "@/data/config";
import Link from "next/link";

export const PersonalStatus = () => {
  return (
    <ul className="mx-auto my-10 list-disc px-5 md:w-2/3">
      {Config.SocialLinks.github && (
        <li className="my-2">
          {"📕 Check out my github profile at "}
          <Link className="underline" href={`https://github.com/${Config.SocialLinks.github}`} target="_blank">
            Github
          </Link>
        </li>
      )}
      <li className="my-2">🖥️ Programming stack: TypeScript, JavaScript, C++, C, Rust, Go and so on.</li>
      <li className="my-2">🤝 I am looking for friends who are fund of XXXX</li>
      {Config.SocialLinks.twitter && (
        <li className="my-2">
          {"📫 How to reach me on Twitter: "}
          <Link className="link" href={`https://twitter.com/${Config.SocialLinks.twitter}`} target="_blank">
            {Config.SocialLinks.twitter}
          </Link>
        </li>
      )}
      <li className="my-2">Language : 汉语 / English / 한국어 / 日本語 </li>
      <li className="my-2">Pronouns : Male / Female / MTF / FTM / And Others</li>
      <li className="my-2">From : Your Country, State / Province</li>
    </ul>
  );
};
