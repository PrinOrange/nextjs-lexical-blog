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
  const postURL = encodeURI(`https://${Config.SiteDomain}/blog/${props.postId}`);
  const copyShareText = `${props.title} ${props.subtitle ? `- ${props.subtitle}` : ""} - ${
    Config.Nickname
  }'s Blog ${postURL}`;
  const { toast } = useToast();
  return (
    <div className="py-3 flex justify-center space-x-4 text-2xl">
      {props.allowShare != false ? (
        <>
          <FacebookShareButton className="mx-2" quote={props.quote ?? props.title} url={postURL}>
            <FaFacebook className="hover:text-blue-500" title="Share to Facebook" />
          </FacebookShareButton>
          <TwitterShareButton className="mx-2" title={props.title} url={postURL}>
            <FaTwitter className="hover:text-sky-500" title="Share to Twitter" />
          </TwitterShareButton>
          <LinkedinShareButton className="mx-2" title={props.title} url={postURL}>
            <FaLinkedin className="hover:text-blue-500" title="Share to Linkedin" />
          </LinkedinShareButton>
          <RedditShareButton className="mx-2" title={props.title} url={postURL}>
            <FaReddit className="hover:text-orange-500" title="Share to Reddit" />
          </RedditShareButton>
          <CopyToClipboard
            onCopy={() => {
              toast({ description: "Link is copied successfully" });
            }}
            text={copyShareText}
          >
            <FaLink
              className="hover:text-gray-500 mx-2 cursor-pointer"
              title="Share with the post url and description"
            />
          </CopyToClipboard>
        </>
      ) : (
        <div className="my-auto text-sm font-bold">{"SHARING IS NOT ALLOWED"}</div>
      )}
    </div>
  );
};
