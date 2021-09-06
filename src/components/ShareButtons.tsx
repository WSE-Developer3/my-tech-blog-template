import React, { useEffect, useState } from "react";
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

const ShareButtons = ({ title }: { title: string }) => {
  const [href, setHref] = useState("https://blog.paths-are.com");

  useEffect(() => {
    setHref(window.location.href);
  }, []);

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
      <TwitterShareButton title={title} url={href}>
        <TwitterIcon size={48} round={true} />
      </TwitterShareButton>
      <FacebookShareButton title={title} url={href}>
        <FacebookIcon size={48} round={true} />
      </FacebookShareButton>
      <HatenaShareButton title={title} url={href}>
        <HatenaIcon size={48} round={true} />
      </HatenaShareButton>
      <LineShareButton title={title} url={href}>
        <LineIcon size={48} round={true} />
      </LineShareButton>
      <PocketShareButton title={title} url={href}>
        <PocketIcon size={48} round={true} />
      </PocketShareButton>
    </Stack>
  );
};
export default ShareButtons;
