import * as React from "react";
import Template from "./Template";
import MainPostDetail from "../organisms/MainPostDetail";
import { postObject } from "../organisms/MainPostDetail";

interface PostDetailemplateProps {
  post: postObject;
  categories: any;
}

export default function PostDetailemplate(props: PostDetailemplateProps) {
  const { post, categories } = props;

  return (
    <Template categories={categories}>
      <MainPostDetail post={post} />
    </Template>
  );
}
