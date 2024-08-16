export type TConfig = {
  AvatarURL: string;
  Sentence?: string;
  Nickname: string;

  SiteTitle: string;
  SiteDomain: string;

  PageCovers: {
    websiteCoverURL: string;
  };

  SocialLinks: {
    twitter?: string;
    bilibili?: string;
    weibo?: string;
    quora?: string;
    reddit?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
    mastodon?: string;
    linkedin?: string;
    youtube?: string;
    telegram?: string;
    email: string;
  };

  RSSFeed?: {
    enabled: boolean;
  };

  Giscus?: {
    enabled: boolean;
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
  };

  Sponsor?: {
    Github?: boolean;
    WechatPayQRCodeContent?: `wxp://${string}`;
    AlipayLink?: `https://qr.alipay.com/${string}`;
    PaypalId?: string;
    PatreonId?: string;
    Crypto?: { Name: string; Address: string; Blockchain: string }[];
  };

  YearStart: string;
  AuthorName: string;
};
