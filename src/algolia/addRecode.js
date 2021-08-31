require("dotenv").config();
const algoliasearch = require("algoliasearch");
const client = algoliasearch("IJHEWO1FRR", process.env.ALGOLIA_ADMIN_API_KEY);
// const { clientMicrocms } = require("../libs/client");
// import { client as ClientMicrocms } from "../libs/client";
const fetch = require("node-fetch");
const createClient = require("microcms-js-sdk");
// import { createClient } from "microcms-js-sdk";

const objects = [
  {
    title: "ブログ記事０５",
    slug: "9a5kq2pjxglc",
  },
  {
    title: "ブログ記事０２",
    slug: "tn18fpo5wo",
  },
  {
    title: "ブログ記事０５",
    slug: "123",
  },
  {
    title: "ブログ記事０２",
    slug: "435",
  },
  {
    title: "ブログ記事０５",
    slug: "222",
  },
  {
    title: "ブログ記事０２",
    slug: "515",
  },
];

const index = client.initIndex("paths_are");

const main = async () => {
  const response = await fetch(
    "https://paths-are-template.microcms.io/api/v1/blog?fields=id%2Ctitle%2Cbody",
    // "https://paths-are-template.microcms.io/api/v1/blog?fields=id&title",
    {
      headers: {
        "X-API-KEY": process.env.API_KEY,
      },
    }
  );
  const blogList = await response.json();
  console.log(blogList);
  //   const blogList = await clientMicrocms.get({
  //     endpoint: "blog",
  //     queries: { fields: "id,title" },
  //   });
  const objects = await blogList.contents.map((obj) => ({
    title: obj.title,
    slug: obj.id,
    body: obj.body,
  }));
  console.log(objects);

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
