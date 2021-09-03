import React, { useState, useEffect } from "react";
import PostDetailemplate from "../../src/components/templates/PostDetailemplate";
import { useRouter } from "next/router";

export default function PostDetailPage() {
  const router = useRouter();
  const [post, setPost] = useState({
    title: "",
    body: "",
    id: "",
    imgUrl: "",
    featuredImage: "",
  });
  const [categoryList, setCategoryList] = useState([{ url: [""], title: "" }]);

  useEffect(() => {
    if (router.isReady) {
      const { contentid, draftkey } = router.query;
      const fetchMicrocmsData = async () => {
        /** プレビュー記事取得 */
        const responstPost = await fetch(
          `https://paths-are-template.microcms.io/api/v1/blog/${contentid}?draftKey=${draftkey}`,
          {
            headers: {
              "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
            },
          }
        );
        const post = await responstPost.json();
        setPost(post);

        /** カテゴリー一覧 */
        const responseCategoryList: any = await fetch(
          `https://paths-are-template.microcms.io/api/v1/category?fields=id%2Ccategory`,
          {
            headers: {
              "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
            },
          }
        );
        const responseCategoryListJson: any = await responseCategoryList.json();
        const categoryList = responseCategoryListJson.contents.map(
          (content: any) => {
            return { url: content.id, title: content.category };
          }
        );
        setCategoryList(categoryList);
      };
      fetchMicrocmsData();
    }
  }, [router.query]);

  return <PostDetailemplate post={post} categories={categoryList} />;
}
