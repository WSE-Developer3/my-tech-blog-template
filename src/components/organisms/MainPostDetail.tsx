import React, { createContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "../Markdown";

export interface postObject {
  title: string;
  body?: string;
}

interface MainPostDetailProps {
  post: postObject;
}

export type ThemeContextState = {
  codeStyle: string;
  updateCodeStyle: () => void;
};

const contextDefaultValues: ThemeContextState = {
  codeStyle: "dark",
  updateCodeStyle: () => {},
};

export const ThemeContext =
  createContext<ThemeContextState>(contextDefaultValues);

export default function MainPostDetail(props: MainPostDetailProps) {
  const { post } = props;

  const [codeStyle, setCodeStyle] = useState<string>(
    contextDefaultValues.codeStyle
  );
  const updateCodeStyle = () => {
    setCodeStyle(codeStyle === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        codeStyle,
        updateCodeStyle,
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          "& .markdown": {
            py: 3,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Divider />
        <Markdown className="markdown">{post.body || "本文無し"}</Markdown>
      </Grid>
    </ThemeContext.Provider>
  );
}
