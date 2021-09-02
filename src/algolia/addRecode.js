require("dotenv").config();
const algoliasearch = require("algoliasearch");
const client = algoliasearch("IJHEWO1FRR", process.env.ALGOLIA_ADMIN_API_KEY);
const fetch = require("node-fetch");

const objectsSample = [
  {
    title: "ブログ記事０５",
    slug: "9a5kq2pjxglc",
  },
];

const index = client.initIndex("paths_are");

const main = async () => {
  const response = await fetch(
    "https://paths-are-template.microcms.io/api/v1/blog?fields=id%2Ctitle%2Cbody",
    {
      headers: {
        "X-API-KEY": process.env.MICROCMS_API_KEY,
      },
    }
  );
  console.log(response);
  const blogList = await response.json();
  console.log(blogList);
  const objects = await blogList.contents.map((obj) => ({
    title: obj.title,
    slug: obj.id,
    body: obj.body,
  }));

  index
    .replaceAllObjects(objects, { autoGenerateObjectIDIfNotExist: true })
    .then(({ objectIDs }) => {
      console.log(objectIDs);
    })
    .catch((err) => {
      console.log(err);
    });
};
main();
