import { client } from "../../libs/client";
import PostDetailemplate from "../../src/components/templates/PostDetailemplate";

export default function PostDetailPage({ post, categories }: any) {
  return <PostDetailemplate post={post} categories={categories} />;
}

/**
 * 静的生成のためのパスを作成
 */
export const getStaticPaths = async () => {
  const blogList: any = await client.get({ endpoint: "blog" });

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
  const post = await client.get({ endpoint: "blog", contentId: id });

  /** カテゴリー一覧 */
  const responseCategoryList: any = await client.get({
    endpoint: "category",
    queries: { fields: "id,category" },
  });
  const categoryList = responseCategoryList.contents.map((content: any) => {
    return { url: [content.id], title: content.category };
  });
  console.log(categoryList);

  return {
    props: {
      post: post,
      categories: categoryList,
    },
  };
};
