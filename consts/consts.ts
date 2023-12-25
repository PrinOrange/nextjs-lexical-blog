import { Config } from "@/data/config";
import path from "path";
import process from "process";

export const LatestPostCountInHomePage = 5;
export const PostCountPerPagination = 5;
export const PostsRootDirectory = path.join(process.cwd(), "./data/posts");

export const RSSFeedLink = `https://${Config.SiteDomain}/rss.xml`;
