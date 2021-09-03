import React from "react";
import Stack from "@material-ui/core/Stack";
import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  // PinterestShareButton,
  PocketShareButton,
  TwitterShareButton,
} from "react-share";
// import {
//   FacebookShareCount,
//   HatenaShareCount,
//   PinterestShareCount,
// } from "react-share";
import {
  FacebookIcon,
  // FacebookMessengerIcon,
  HatenaIcon,
  LineIcon,
  // PinterestIcon,
  PocketIcon,
  TwitterIcon,
} from "react-share";

const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        my: 1,
      }}
    >
      <TwitterShareButton title={title} url={url}>
        <TwitterIcon size={48} round={true} />
      </TwitterShareButton>
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
