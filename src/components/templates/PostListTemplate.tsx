import * as React from "react";
import Template from "./Template";
import MainPostList from "../organisms/MainPostList";

export default function PostListTemplate(props: any) {
  const { mainFeaturedPost, featuredPosts, posts, categories } = props;

  return (
    <Template
      mainFeaturedPost={mainFeaturedPost}
      featuredPosts={featuredPosts}
      categories={categories}
    >
      <MainPostList title="記事一覧" posts={posts} />
    </Template>
  );
}
