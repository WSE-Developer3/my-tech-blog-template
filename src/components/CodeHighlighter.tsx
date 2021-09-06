import React, { useContext } from "react";
import { Box, IconButton, Snackbar, Tooltip } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialLight,
  materialDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import copy from "copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "./organisms/MainPostDetail";

export default function CodeHighlighter(props: any) {
  const { className } = props;
  const { codeStyle, updateCodeStyle } = useContext(ThemeContext);
  const [messageOpen, setMessageOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      console.log(event);
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

  let language = "javascript"; // デフォルト値
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
              boxShadow:
                codeStyle === "dark"
                  ? "0px 0px 0px -0px rgb(0 0 0 / 0%)"
                  : "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
          >
            {fileName.length > 0 ? (
              <Box
                sx={{
                  // height: 18,
                  height: 0,
                  backgroundColor:
                    codeStyle === "dark"
                      ? "rgb(47, 47, 47)"
                      : "rgb(250, 250, 250)",
                  bottom: "-0.5rem",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 10,
                    top: -18,
                    zIndex: 1,
                    color: codeStyle === "dark" ? "#FFF" : "#000",
                    backgroundColor:
                      codeStyle === "dark" ? "rgb(60, 60, 60)" : "#FFF",
                    padding: "2px 8px",
                    boxShadow: 1,
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    fontFamily: "sans-serif",
                  }}
                >
                  {fileName}
                </Box>
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
                    <IconButton onClick={updateCodeStyle}>
                      <Brightness4Icon
                        fontSize="small"
                        sx={{
                          color: codeStyle === "dark" ? "#FFF" : "#000",
                        }}
                      />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="コードをコピー" placement="top">
                    <IconButton
                      onClick={() => {
                        copy(props.children);
                        setMessageOpen(true);
                      }}
                    >
                      <ContentCopyIcon
                        fontSize="small"
                        sx={{
                          color: codeStyle === "dark" ? "#FFF" : "#000",
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
              </Box>
            ) : (
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
                  <IconButton onClick={updateCodeStyle}>
                    <Brightness4Icon
                      fontSize="small"
                      sx={{
                        color: codeStyle === "dark" ? "#FFF" : "#000",
                      }}
                    />
                  </IconButton>
                </Tooltip>

                <Tooltip title="コードをコピー" placement="top">
                  <IconButton
                    onClick={() => {
                      copy(props.children);
                      setMessageOpen(true);
                    }}
                  >
                    <ContentCopyIcon
                      fontSize="small"
                      sx={{
                        color: codeStyle === "dark" ? "#FFF" : "#000",
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
            )}
            <SyntaxHighlighter
              className={codeStyle === "dark" ? "" : "box-shadow"}
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
