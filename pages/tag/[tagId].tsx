import { client } from "../../libs/client";
import TagTemplate from "../../src/components/templates/TagTemplate";

export default function TagFilteredPage({ posts, tag, tagList }: any) {
  return <TagTemplate posts={posts} tag={tag} tagList={tagList} />;
}

// 静的生成のためのパスを作成
export const getStaticPaths = async () => {
  const tagList: any = await client.get({ endpoint: "tag" });

  let paths = [];
  for (let content of tagList.contents) {
    paths.push({ params: { tagId: content.id } });
  }

  return { paths, fallback: false };
};

// カテゴリーに紐づいている記事一覧を取得し、テンプレートへ受け渡す
export const getStaticProps = async (context: any) => {
  const tag = context.params.tagId;
  const tagNameContents: any = await client.get({
    endpoint: "tag",
    queries: { filters: `id[equals]${tag}` },
  });
  const tagName = tagNameContents.contents[0].tag;

  const postsFilteredByTag: any = await client.get({
    endpoint: "post",
    queries: { filters: `tags[contains]${tag}` },
  });

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
      posts: postsFilteredByTag.contents,
      tag: tagName,
      tagList: tagList,
    },
  };
};
