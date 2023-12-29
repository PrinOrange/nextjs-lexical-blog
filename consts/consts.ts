import { Config } from "@/data/config";
import path from "path";
import process from "process";

export const LatestPostCountInHomePage = 5;
export const PostCountPerPagination = 5;
export const PostsRootDirectory = path.join(process.cwd(), "./data/posts");

export const RSSFeedURL = `https://${Config.SiteDomain}/rss.xml`;
export const WebsiteURL = `https://${Config.SiteDomain}/`;

export const CopyrightAnnouncement = `COPYRIGHT © ${Config.YearStart}-${new Date().getFullYear()} ${
  Config.AuthorName
} ALL RIGHTS RESERVED`;
