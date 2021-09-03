import * as React from "react";
import Template from "./Template";
import MainPostDetail from "../organisms/MainPostDetail";
import { postObject } from "../organisms/MainPostDetail";
import CommonMeta from "../CommonMeta";

interface PostDetailemplateProps {
  post: postObject;
  categories: any;
}

export default function PostDetailemplate({
  post,
  categories,
}: PostDetailemplateProps) {
  const imgUrl = post.featuredImage.url || "";
  return (
    <Template categories={categories}>
      <CommonMeta
        title={post.title}
        url={`https://works.paths-are.com/paths-are-tech-blog-template/blog/${post.id}`}
        description={post.title}
        imgUrl={imgUrl}
      />
      <MainPostDetail post={post} />
    </Template>
  );
}
