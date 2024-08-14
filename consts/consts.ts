import path from "path";
import { Config } from "@/data/config";
import { getCurrentTime } from "@/lib/date";
import process from "process";

export const LatestPostCountInHomePage = 10;
export const PostCountPerPagination = 10;
export const UserDataDirectory = path.join(process.cwd(), "./data");
export const PostFilesDirectory = path.join(UserDataDirectory, "/posts");

export const RSSFeedURL = `https://${Config.SiteDomain}/rss.xml`;
export const WebsiteURL = `https://${Config.SiteDomain}/`;
export const PostURL = (postId: string) => `https://${Config.SiteDomain}/blog/${postId}`;
export const SearchURL = (keyword: string) => `https://${Config.SiteDomain}/search/?q=${keyword}`;

const year = getCurrentTime().year;
export const CopyrightAnnouncement = `COPYRIGHT © ${Config.YearStart === year ? year : `${Config.YearStart}-${year}`} ${Config.AuthorName} ALL RIGHTS RESERVED`;
