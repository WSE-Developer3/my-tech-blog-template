import { client } from "../libs/client";
import PostListTemplate from "../src/components/templates/PostListTemplate";

export default function BlogListPage({
  mainFeaturedPost,
  featuredPosts,
  posts,
  categories,
}: any) {
  return (
    <PostListTemplate
      mainFeaturedPost={mainFeaturedPost}
      featuredPosts={featuredPosts}
      posts={posts}
      categories={categories}
    />
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  /** 人気記事 */
  const responseMainFeaturedPost: any = await client.get({
    endpoint: "main-featured-post",
    queries: { fields: "mainFeaturedPost" },
  });
  let mainFeaturedPost = {
    id: responseMainFeaturedPost.mainFeaturedPost.id,
    title: responseMainFeaturedPost.mainFeaturedPost.title,
    description: responseMainFeaturedPost.mainFeaturedPost.description,
    image: responseMainFeaturedPost.mainFeaturedPost.featuredImage.url,
    imageText: "imageTextを設定してください。",
    linkText: "記事を読む",
  };

  /** おすすめの記事 */
  const responseFeaturedPosts: any = await client.get({
    endpoint: "featured-posts",
  });
  let featuredPosts = [];
  for (let post of responseFeaturedPosts.featuredPosts) {
    featuredPosts.push({
      id: post.id,
      date: post.revisedAt,
      description: post.description,
      image: post.featuredImage.url,
      imageText: "imageTextを設定してください。",
      title: post.title,
      linkText: "記事を読む",
    });
  }

  /** 記事一覧 */
  const blog: any = await client.get({ endpoint: "blog" });

  /** カテゴリー一覧 */
  const responseCategoryList: any = await client.get({
    endpoint: "category",
    queries: { fields: "id,category" },
  });
  const categoryList = responseCategoryList.contents.map((content: any) => {
    return { url: [content.id], title: content.category };
  });
  // console.log(responseCategoryList);

  return {
    props: {
      mainFeaturedPost: mainFeaturedPost,
      featuredPosts: featuredPosts,
      posts: blog.contents,
      categories: categoryList,
    },
  };
};
