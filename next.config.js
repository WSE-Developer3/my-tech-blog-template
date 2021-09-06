const URL_PREFIX = "/paths-are-tech-blog-template";
const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

module.exports = {
  /**
   * webpackカスタマイズ
   * ・mdファイルを読み込み可能にする
   */
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md/,
      loader: "raw-loader",
      exclude: /(node_modules)/,
    });
    return config;
  },

  /**
   * trailingSlashをtrueにすることで、静的ファイルでの出力が可能になる
   * 例）./sample → ./sample/
   */
  trailingSlash: true,

  /**
   * ドメイン直下ではなく、下記のサブフォルダ配下に配置する
   * ドメイン直下に配置したい場合は、basePathはコメントアウトして下さい。
   * 例）
   * https:my-domain-name.com/ → ×
   * https:my-domain-name.com/jamstackblog-with-next-muiv5-microcms → 〇
   */
  basePath: process.env.BASE_PATH ? process.env.BASE_PATH : null,
  assetPrefix: process.env.BASE_PATH ? process.env.BASE_PATH : null,
  publicRuntimeConfig: {
    urlPrefix: process.env.BASE_PATH ? process.env.BASE_PATH : null,
  }, // 画像読み込みに使う。参考：https://maku.blog/p/xjjbwes/

  /**
   * 別ドメインにある画像を使う場合の設定
   */
  images: {
    domains: ["images.microcms-assets.io"],
  },

  /**
   * algolia
   * https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/react/#style-your-widgets
   */
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style?insertAt=top", "css"],
      },
    ],
  },
};
