import * as React from "react";
import Template from "./Template";
import MainPostDetail from "../organisms/MainPostDetail";
import { postObject } from "../organisms/MainPostDetail";
import CommonMeta from "../CommonMeta";

interface PostDetailemplateProps {
  post: postObject;
  tagList: any;
}

export default function PostDetailemplate({
  post,
  tagList,
}: PostDetailemplateProps) {
  const imgUrl = post.featuredImage.url || "";
  return (
    <Template tagList={tagList}>
      <CommonMeta
        title={post.title}
        url={`https://works.paths-are.com/paths-are-tech-blog-template/post/${post.id}`}
        description={post.title}
        imgUrl={imgUrl}
      />
      <MainPostDetail post={post} />
    </Template>
  );
}
