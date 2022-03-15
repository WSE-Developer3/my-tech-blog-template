import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Link as MuiLink,
} from "@mui/material";
import Header from "../organisms/Header";
// import MainFeaturedPost from "../molecules/MainFeaturedPost";
// import FeaturedPost from "../molecules/FeaturedPost";
import Sidebar from "../organisms/Sidebar";
import Footer from "../organisms/Footer";
import { sidebar } from "../../utils/sidebar";
import NextLink from "next/link";
// import Pagination from "../organisms/Pagination";

function Top() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: 200,
      }}
    >
      <img
        src={"/imgs/blog-top/2.png"}
        alt="アイキャッチ画像"
        width="100%"
        style={{ minHeight: "200px", objectFit: "cover" }}
      />
      <Typography
        component="h2"
        variant="h5"
        align="center"
        noWrap
        sx={{ position: "absolute", color: "#FFF" }}
      >
        <NextLink href="/" passHref>
          <MuiLink underline="hover" sx={{ color: "#FFF" }}>
            パスアの開発ブログ
          </MuiLink>
        </NextLink>
      </Typography>
    </Box>
  );
}

export default function Template(props: any) {
  const {
    //  mainFeaturedPost,
    // featuredPosts,
    tagList,
  } = props;

  return (
    <React.Fragment>
      <CssBaseline />

      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "213px" /* ←フッターの高さを指定*/,
          boxSizing: "border-box",
          backgroundColor: "#f3f4f6",
        }}
      >
        <Top />
        <Container maxWidth="lg">
          <Header title="パスアの開発ブログ" sections={tagList} />
          <main>
            <Grid container mt={2}>
              {props.children}
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                // archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
            {/* <Pagination /> */}
          </main>
        </Container>
        <Footer
          title="パスアの開発記録"
          description="ReactとNext.jsに特化して情報を発信していきます。"
        />
      </div>
    </React.Fragment>
  );
}
