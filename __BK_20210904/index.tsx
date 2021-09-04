import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography, /* Link as MuiLink,*/ Stack } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
// import Menu from "../src/components/homepage/Menu/Index";
import Image from "next/image";
// import profilePic from "../public/me.png";
import { url } from "../src/libs/config";
import MuiMenu from "../__BK_20210904/homepage/MuiMenu/Index";

// const BACKGROUND_PNG = "/imgs/lp-background01.jpg";

let theme = createTheme();
theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
theme = responsiveFontSizes(theme);

const menus = [
  { title: "Top", url: "" },
  { title: "About", url: "#about" },
  { title: "Service", url: "#service" },
  { title: "Blog", url: `./blog` },
];
export default function Home() {
  console.log(url("/imgs/lp-background01.png"));
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* 1 ページ目 */}
        <Box
          // ヘッダー
          sx={{
            height: 70,
            background:
              "linear-gradient(90.35deg, #429889 5.87%, rgba(31, 72, 65, 0.63) 103.24%)",
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            px: 2,
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Container
            maxWidth={"lg"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h4"
              align="left"
              sx={{
                flexGrow: 1,
                color: "#FFF",
              }}
            >
              Paths are
            </Typography>
            <Stack
              spacing={5}
              direction="row"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {menus.map((menu) => {
                return (
                  <Typography
                    key={menu.title}
                    variant="h5"
                    align="center"
                    sx={{
                      color: "#FFF",
                    }}
                  >
                    {menu.title}
                  </Typography>
                );
              })}
            </Stack>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <MuiMenu menus={menus} />
            </Box>
          </Container>
        </Box>
        {/* <Box sx={{ position: "relative" }}> */}
        {/* <Box sx={{ height: `calc(100vh - 70px)` }}>
            <img
              style={{
                height: "100%",
                objectFit: "cover",
                width: "100%",
              }}
              src={url("/me.png")}
              alt="background"
            />
          </Box> */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            height: `calc(100vh - 70px)`,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: { url: url("/me.png") },
          }}
        >
          <Box sx={{ p: { xs: 2 } }}>
            <Typography
              variant="h1"
              // variant={{ xs: "h5", md: "h1" }}
              align="center"
              sx={{
                color: "black",
              }}
            >
              高速なHP/LP制作致します。
            </Typography>
          </Box>
        </Box>
        {/* </Box> */}
        {/* 2 ページ目 */}
        <Box></Box>
      </Box>
    </ThemeProvider>
  );
}
