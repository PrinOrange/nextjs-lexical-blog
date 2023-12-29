import { useToast } from "@/components/ui/use-toast";
import { Config } from "@/data/config";
import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton } from "next-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaFacebook, FaLink, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa6";

export const ShareButtons = (props: {
  postId: string;
  allowShare?: boolean | null;
  subtitle?: string | null;
  title: string;
  quote?: string | null;
}) => {
  const postURL = `https://${Config.SiteDomain}/blog/${props.postId}`;
  const copyShareText = `${props.title} ${props.subtitle ? `- ${props.subtitle}` : ""} - ${
    Config.Nickname
  }'s Blog ${postURL}`;
  const { toast } = useToast();
  return (
    <div className="my-3 flex space-x-4 text-2xl">
      {props.allowShare != false ? (
        <>
          <div className="my-auto text-sm font-bold">{"SHARE :"}</div>
          <FacebookShareButton className="mx-2" url={postURL} quote={props.quote ?? props.title}>
            <FaFacebook title="Share to Facebook" className="hover:text-blue-500" />
          </FacebookShareButton>
          <TwitterShareButton className="mx-2" url={postURL} title={props.title}>
            <FaTwitter title="Share to Twitter" className="hover:text-sky-500" />
          </TwitterShareButton>
          <LinkedinShareButton className="mx-2" url={postURL} title={props.title}>
            <FaLinkedin title="Share to Linkedin" className="hover:text-blue-500" />
          </LinkedinShareButton>
          <RedditShareButton className="mx-2" url={postURL} title={props.title}>
            <FaReddit title="Share to Reddit" className="hover:text-orange-500" />
          </RedditShareButton>
          <CopyToClipboard
            onCopy={() => {
              toast({ description: "Link is copied successfully" });
            }}
            text={copyShareText}
          >
            <FaLink
              title="Share with the post url and description"
              className="hover:text-gray-500 mx-2 cursor-pointer"
            />
          </CopyToClipboard>
        </>
      ) : (
        <div className="my-auto text-sm font-bold">{"SHARING IS NOT ALLOWED"}</div>
      )}
    </div>
  );
};
