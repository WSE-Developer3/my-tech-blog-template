import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import CodeHighlighter from "./CodeHighlighter";

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h1",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: MuiLink },
    li: {
      component: MarkdownListItem,
    },
    code: CodeHighlighter,
  },
};

export default function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} />;
}
