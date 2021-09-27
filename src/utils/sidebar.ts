import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const sidebar = {
  title: "管理人について",
  // description: `フロント画面の開発が大好きなフリーのデベロッパーです。好きな言語はReactとNext.js。TypeScriptとNode.jsもできます。`,
  description: `React、Next.js、TypeScriptを愛用しています。このブログはフロントはNext.js、TypeScript、MUI、記事の管理（バックエンド）はmicroCMSで構成されています。Webに関する記事多めで投稿していきます。`,
  social: [
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/paths_are",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/paths_are",
    },
    {
      name: "Github",
      icon: GitHubIcon,
      url: "https://github.com/paths-are",
    },
  ],
};
