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
  const [tagList, setTagList] = useState([{ url: [""], title: "" }]);

  useEffect(() => {
    if (router.isReady) {
      const { contentid, draftkey } = router.query;
      const fetchMicrocmsData = async () => {
        /** プレビュー記事取得 */
        const responstPost = await fetch(
          `https://paths-are-template.microcms.io/api/v1/post/${contentid}?draftKey=${draftkey}`,
          {
            headers: {
              "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
            },
          }
        );
        const post = await responstPost.json();
        setPost(post);

        /** カテゴリー一覧 */
        const responseTagList: any = await fetch(
          `https://paths-are-template.microcms.io/api/v1/tag?fields=id%2Ctag`,
          {
            headers: {
              "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
            },
          }
        );
        const responseTagListJson: any = await responseTagList.json();
        const tagList = responseTagListJson.contents.map((content: any) => {
          return { url: content.id, title: content.tag };
        });
        setTagList(tagList);
      };
      fetchMicrocmsData();
    }
  }, [router.query]);

  return <PostDetailemplate post={post} tagList={tagList} />;
}
