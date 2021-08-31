import React, { useContext } from "react";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  materialDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import copy from "copy-to-clipboard";
import ContentCopyIcon from "@material-ui/icons/ContentCopy";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { ThemeContext } from "./organisms/MainPostDetail";

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

function CodeHighlighter(props: any) {
  const { className } = props;
  const { codeStyle, updateCodeStyle } = useContext(ThemeContext);
  const [messageOpen, setMessageOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setMessageOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  let language = "javascript"; // 指定がなかった時のデフォルト値
  let fileName: string = "";
  if (className) {
    const suffix = "lang-";
    const startPoint = suffix.length;
    const colon = className.indexOf(":");

    /*
     * [1] classNameに":"がある場合はfileNameとlanguageを取得する。
     * [2] classNameに":"がない場合はlanguageのみ取得する。
     */
    if (colon !== -1) {
      // [1]
      language = className.substring(startPoint, colon);
      fileName = className.substring(startPoint + language.length + 1);
    } else {
      // [2]
      language = className.substring(startPoint);
    }
  }

  return (
    <ThemeContext.Consumer>
      {() => {
        return (
          <div
            style={{
              position: "relative",
              marginTop: fileName.length > 0 ? 28 : 0,
            }}
          >
            {fileName.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  left: -4,
                  top: -15,
                  zIndex: 1,
                  color: codeStyle === "dark" ? "#FFF" : "#000",
                  backgroundColor:
                    codeStyle === "dark" ? "rgb(40, 40, 40)" : "#FFF",
                  padding: "2px 8px",
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                {fileName}
              </Box>
            )}
            <div
              style={{
                position: "absolute",
                right: 5,
                top: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
              }}
            >
              <Tooltip title="テーマ変更" placement="top">
                <IconButton>
                  <Brightness4Icon
                    fontSize="small"
                    sx={{
                      color: codeStyle === "dark" ? "#FFF" : "#000",
                    }}
                    onClick={updateCodeStyle}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title="コードをコピー" placement="top">
                <IconButton>
                  <ContentCopyIcon
                    fontSize="small"
                    sx={{
                      color: codeStyle === "dark" ? "#FFF" : "#000",
                    }}
                    onClick={() => {
                      copy(props.children);
                      setMessageOpen(true);
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Snackbar
                open={messageOpen}
                autoHideDuration={3000}
                onClose={handleClose}
                message="クリップボードにコピーしました。"
                action={action}
              />
            </div>
            <SyntaxHighlighter
              style={codeStyle === "dark" ? materialDark : materialLight}
              language={language}
              PreTag="div"
            >
              {props.children}
            </SyntaxHighlighter>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
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
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
    code: CodeHighlighter,
  },
};

export default function Markdown(props: any) {
  return <ReactMarkdown options={options} {...props} />;
}
