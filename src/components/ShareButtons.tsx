import React from "react";
import Stack from "@material-ui/core/Stack";
import {
  // EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  // InstapaperShareButton,
  LineShareButton,
  // LinkedinShareButton,
  // LivejournalShareButton,
  // MailruShareButton,
  // OKShareButton,
  // PinterestShareButton,
  PocketShareButton,
  // RedditShareButton,
  // TelegramShareButton,
  // TumblrShareButton,
  TwitterShareButton,
  // ViberShareButton,
  // VKShareButton,
  // WhatsappShareButton,
  // WorkplaceShareButton,
} from "react-share";
// import {
//   FacebookShareCount,
//   HatenaShareCount,
//   OKShareCount,
//   PinterestShareCount,
//   RedditShareCount,
//   TumblrShareCount,
//   VKShareCount,
// } from "react-share";
import {
  // EmailIcon,
  FacebookIcon,
  // FacebookMessengerIcon,
  HatenaIcon,
  // InstapaperIcon,
  LineIcon,
  // LinkedinIcon,
  // LivejournalIcon,
  // MailruIcon,
  // OKIcon,
  // PinterestIcon,
  PocketIcon,
  // RedditIcon,
  // TelegramIcon,
  // TumblrIcon,
  TwitterIcon,
  // ViberIcon,
  // VKIcon,
  // WeiboIcon,
  // WhatsappIcon,
  // WorkplaceIcon,
} from "react-share";

const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  // const { title, url } = props;
  // return <TwitterShareButton title="tw" />;
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <TwitterShareButton title={title} url={url}>
        <TwitterIcon size={48} round={true} />
      </TwitterShareButton>
      {/* <InstapaperShareButton title={title} url={url}>
        <InstapaperIcon size={48} round={true} />
      </InstapaperShareButton> */}
      <FacebookShareButton title={title} url={url}>
        <FacebookIcon size={48} round={true} />
      </FacebookShareButton>
      <HatenaShareButton title={title} url={url}>
        <HatenaIcon size={48} round={true} />
      </HatenaShareButton>
      <LineShareButton title={title} url={url}>
        <LineIcon size={48} round={true} />
      </LineShareButton>
      <PocketShareButton title={title} url={url}>
        <PocketIcon size={48} round={true} />
      </PocketShareButton>
    </Stack>
  );
};
export default ShareButtons;
