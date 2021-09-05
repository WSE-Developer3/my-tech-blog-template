import * as React from "react";
import Template from "./Template";
import MainPostList from "../organisms/MainPostList";

export default function TagTemplate(props: any) {
  const { mainFeaturedPost, featuredPosts, posts, tagList, tag } = props;

  return (
    <Template
      mainFeaturedPost={mainFeaturedPost}
      featuredPosts={featuredPosts}
      tagList={tagList}
    >
      <MainPostList title="記事一覧" posts={posts} tag={tag} />
    </Template>
  );
}
