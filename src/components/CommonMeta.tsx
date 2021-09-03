import Head from "next/head";

export default function CommonMeta({
  title = "Paths are 技術サイト",
  url = "https://paths-are.com",
  description = "Webに関する情報を発信しています。主にReactとNext.jsが中心です。",
  imgUrl = "https://images.microcms-assets.io/assets/9603f620419a40f1bf7ae17a0da1a8a3/6c96b6277af4472dbdd8ae753796daa9/eye-catching-image_05.jpg",
}) {
  const TWITTER_CARD = "summary_large_image";
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={"article"} />

      <meta name="twitter:card" content={TWITTER_CARD} />
      <meta name="twitter:site" content="@paths_are" />
      <meta name="twitter:creator" content="@paths_are" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl}></meta>
    </Head>
  );
}
