mui の差し替えを行ってね！

# Next.js と microCMS で作る Jamstack な技術ブログのテンプレート

microCMS と Next.js を使い Jamstack なブログを作成するためのフロントエンドのソースコードになります。  
バックエンドは microCMS でご自身で構築さい。  
[構築参考 URL](https://paths-are.com/archives/1961)
Algolia の設定も必要になります。

## 実装内容

ページ

- Top ページ
- 一番読まれている記事が大きく表示
- 人気記事がその下に２つ表示
- 全ての記事一覧を表示
- 詳細ページ
- 記事のタイトルと本文を表示

機能一覧

- カテゴリーでのフィルタリング機能

  - カテゴリリンククリック時にカテゴリーに紐づく記事を表示

- 検索機能

  - 入力されている値に対して algolia を使い検索
  - 検索フォームにカーソルが当たったら、記事一覧を表示（今後）

- シンタックスハイライター

  - コピーボタンの設置
  - ダークモード ON・OFF 機能

- 記事のシェアボタンの設置（済）
- プレビュー画面の設置（2021/9/1 済）
- Google Analitics 設置（2021/9/2 済）
- 広告の設置？（今後）
- 目次ナビゲーションの設置（今後）
- カードにタグを表示　 → 　微妙だからなし。（2021/9/2 済）
- 記事が良かったどうかのフィードバックボタン（今後）
- microCMS 記事更新時に Algolia のインデックスを更新・再ビルドしてサーバーに自動デプロイ（2021/9/1 済）
- OGP 設定（Twitter は済）
- ローカルでの記事投稿と microCMS/contentful どちらが良いか検証

## 完成サイト

[サンプル - Sample](https://works.paths-are.com/paths-are-tech-blog-template/)

## 完成イメージ

![image](https://user-images.githubusercontent.com/70325458/131208090-2aff9b74-32f2-4669-9a74-52bd2d727448.png)

## 技術スタック

フロント：Next.js  
UI ライブラリー：Material-UI v5  
バックエンド：microCMS
CI：Github Actions

## インストール

```shell
git clone https://github.com/WSE-Developer3/my-tech-blog-template.git
cd my-tech-blog-template
cp .env.sample .env
```

.env ファイルに次の環境変数を設定してください。

```.env
API_KEY=<microCMSのAPIキー>
SERVICE_ID=<microCMSのサービスID>
NEXT_PUBLIC_MICROCMS_API_KEY=<microCMSのAPIキー> static html にする場合は必要
MICROCMS_API_KEY=<microCMSのAPIキー>
MICROCMS_SERVICE_ID=<microCMSのサービスID>
ALGOLIA_ADMIN_API_KEY=<Algoliaのキー>
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=<GoogleAnalyticsのID>
__BASE_PATH=<サブフォルダ、必要なら。__は省く。>
```

```ローカル環境構築
npm install
npm run dev
```

## microCMS の構築

下記記事をご参考ください。
[構築参考 URL](https://paths-are.com/archives/1961)

## 本番環境へのデプロイ手順

```
npm run export
```

作成された out フォルダ配下のファイルをご自身のサーバーへアップロードしてください。

github actions にて
`.github/workflows/deploy.yml` を使うことで、デプロイの自動化をすることができます。
リポジトリに push した際に、自動で自分のサーバーへデプロイされます。
利用するには **github repogitory > settings > secrets** より環境変数を設定してからご利用ください。

```yml:デプロイ自動化に必要な環境変数
    MICROCMS_API_KEY: ${{ secrets.MICROCMS_API_KEY }}
    MICROCMS_SERVICE_ID: ${{ secrets.MICROCMS_SERVICE_ID }}
    ALGOLIA_ADMIN_API_KEY: ${{ secrets.ALGOLIA_ADMIN_API_KEY }}
    FTP_SERVER: ${{ secrets.XSERVER_HOST_NAME }}
    FTP_USERNAME: ${{ secrets.XSERVER_USER_NAME }}
    FTP_PASSWORD: ${{ secrets.XSERVER_PASSWORD }}
    REMOTE_DIR: directory
```

## algolia のインデックス更新コマンド

```shell
npm run algolia # 理想はmicrocmsのwebhookを使って更新すること
```

<!-- ・静的ファイル配信ホスティングサービスをご利用の場合は
out ディレクトリのファイルを本番環境にアップロード
・node.js が入っているサーバーを契約している場合は
各公式サイトを基にデプロイ -->
