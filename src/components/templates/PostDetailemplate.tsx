import * as React from "react";
import Template from "./Template";
import MainPostDetail from "../organisms/MainPostDetail";
import { postObject } from "../organisms/MainPostDetail";

interface PostDetailemplateProps {
  post: postObject;
  categories: any;
}

export default function PostDetailemplate({
  post,
  categories,
}: PostDetailemplateProps) {
  return (
    <Template categories={categories}>
      <MainPostDetail post={post} />
    </Template>
  );
}
