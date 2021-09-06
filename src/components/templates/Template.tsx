import * as React from "react";
import { Container, Grid, CssBaseline } from "@mui/material";
import Header from "../organisms/Header";
import MainFeaturedPost from "../molecules/MainFeaturedPost";
import FeaturedPost from "../molecules/FeaturedPost";
import Sidebar from "../organisms/Sidebar";
import Footer from "../organisms/Footer";
import { sidebar } from "../../utils/sidebar";

export default function Template(props: any) {
  const { mainFeaturedPost, featuredPosts, tagList } = props;

  return (
    <React.Fragment>
      <CssBaseline />

      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "213px" /* ←フッターの高さを指定*/,
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="lg">
          <Header title="パスアの開発ブログ" sections={tagList} />
          <main>
            {mainFeaturedPost !== undefined && mainFeaturedPost !== null ? (
              <MainFeaturedPost post={mainFeaturedPost} />
            ) : null}
            {featuredPosts !== undefined && mainFeaturedPost !== null ? (
              <Grid container spacing={4}>
                {featuredPosts.map((post: any) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
            ) : null}
            <Grid
              container
              /* spacing={5} */ sx={
                {
                  /* mt: 3 */
                }
              }
            >
              {props.children}
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                // archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
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
