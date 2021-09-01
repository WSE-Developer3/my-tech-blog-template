import React, { useState, useEffect } from "react";
import PostDetailemplate from "../../src/components/templates/PostDetailemplate";
import { useRouter } from "next/router";

export default function PostDetailPage() {
  const router = useRouter();
  // const [param, setParam] = useState<any>();
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [categoryList, setCategoryList] = useState([{ url: [""], title: "" }]);

  // useEffect(() => {
  //   if (router.asPath !== router.route) {
  //     setParam(router.query);
  //   }
  // }, [router]);

  // idが取得されてセットされたら処理される
  useEffect(() => {
    if (router.isReady) {
      // if (param) {
      // ここでidの値を使用してデータをフェッチする
      const { contentid, draftkey } = router.query;
      const main = async () => {
        /** プレビュー記事取得 */
        const fetchOptions = {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
          },
        };
        const responstPost = await fetch(
          `https://paths-are-template.microcms.io/api/v1/blog/${contentid}?draftKey=${draftkey}`,
          fetchOptions
        );
        const post = await responstPost.json();
        setPost(post);

        /** カテゴリー一覧 */
        const responseCategoryList: any = await fetch(
          `https://paths-are-template.microcms.io/api/v1/category?fields=id%2Ccategory`,
          fetchOptions
        );
        const responseCategoryListJson: any = await responseCategoryList.json();
        const categoryList = responseCategoryListJson.contents.map(
          (content: any) => {
            return { url: content.id, title: content.category };
          }
        );
        setCategoryList(categoryList);
      };
      main();
      // }
    }
  }, [router.query]);

  return <PostDetailemplate post={post} categories={categoryList} />;
}
