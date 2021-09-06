import React from "react";
import { Stack } from "@mui/material";
import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  PocketShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  HatenaIcon,
  LineIcon,
  PocketIcon,
  TwitterIcon,
} from "react-share";
import { useRouter } from "next/router";

const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  const router = useRouter();
  console.log(router);
  // c
  // const url = "";
  return (
    <Stack
      direction="row"
      spacing={2}
      // justifyContent="left"
      alignItems="center"
      sx={{
        my: 1,
        overflow: "auto",
        justifyContent: {
          xs: "left",
          sm: "center",
        },
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
