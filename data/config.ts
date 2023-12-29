import { TConfig } from "@/types/config.type";

export const Config: TConfig = {
  // Image url for avatar.
  AvatarURL: "/images/avatar.webp",
  // Your favorite motto, or a brief self-introduction, for homepage display
  Sentence:
    "Two things fill the mind with ever-increasing wonder and awe: the starry heavens above and the moral law within.",
  // Your nickname, or pen name here.
  Nickname: "John Doe",

  // Website main title.
  SiteTitle: "LEXICAL BLOG",
  // Your domain for website.
  SiteDomain: "nextjs-lexical-blog-demo.vercel.app",

  // For the cover image displayed on the homepage, the recommended image aspect ratio is 4:1.
  PageCovers: {
    websiteCoverURL: "/images/cover.webp",
  },

  // Your social platform IDs, and email address.
  SocialLinks: {
    twitter: "example", // Twitter ID
    instagram: "example", // Instagram ID
    github: "example", // Github ID
    facebook: "example", // Facebook ID
    linkedin: "example", // Linkedin ID
    mastodon: "https://mas.to/@example", // Mastodon link
    email: "me@example.com", // Email address, required.
  },

  // Giscus Configure. Please refer to the https://giscus.app for entire instruction
  Giscus: {
    enabled: true,
    repo: `PrinOrange/nextjs-lexical-blog`,
    repoId: "R_kgDOK44zmw",
    category: "Announcements",
    categoryId: "DIC_kwDOK44zm84Cb94g",
  },

  // Enable the RSS Feed? If not, the feed file will not be generated and the feed entrance will be closed.
  RSSFeed: {
    enabled: true,
  },

  // The supported sponsor ways are wechat-pay, alipay and paypal.
  SponsorLink: {
    // Your WechatPay QRCode Content.
    wechatPay: "",
    // Your Alipay Link.
    alipay: "https://qr.alipay.com/xxxx",
    // Your Paypal Account Link.
    paypal: "https://paypal.me/xxxx",
  },

  // Website establishment year.
  YearStart: 2023,
  // Please enter your legal name for use with the copyright mark.
  AuthorName: "JOHN DOE",
};
