import { client } from "../../libs/client";
import PostDetailemplate from "../../src/components/templates/PostDetailemplate";

export default function PostDetailPage({ post, tagList }: any) {
  return <PostDetailemplate post={post} tagList={tagList} />;
}

/**
 * 静的生成のためのパスを作成
 */
export const getStaticPaths = async () => {
  const blogList: any = await client.get({ endpoint: "post" });

  let paths = [];
  for (let content of blogList.contents) {
    paths.push({ params: { id: content.id } });
  }

  return { paths, fallback: false };
};

/**
 * ブログ記事を取得し、テンプレートへ受け渡す
 */
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const post = await client.get({ endpoint: "post", contentId: id });

  /** カテゴリー一覧 */
  const responseTagList: any = await client.get({
    endpoint: "tag",
    queries: { fields: "id,tag" },
  });
  const tagList = responseTagList.contents.map((content: any) => {
    return { url: [content.id], title: content.tag };
  });

  return {
    props: {
      post: post,
      tagList: tagList,
    },
  };
};
