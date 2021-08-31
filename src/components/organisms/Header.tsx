import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";
import Search from "../Search";

// const algoliasearch = require("algoliasearch");

// import { connectAutoComplete } from "react-instantsearch-dom";
// import { InstantSearch } from "react-instantsearch-dom";
// import { Index } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  connectHits,
} from "react-instantsearch-dom";

const searchClient2 = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);
const searchClient = algoliasearch(
  "IJHEWO1FRR",
  "3cdac3eb34cf5bf394e477e1584d8ef8"
);

const Hit = ({ hit }: any) => (
  <p>
    <Highlight attribute="name" hit={hit} tagName="mark" />
  </p>
);

const Hitss = ({ hits }: any) => (
  // React.useEffect(() => {
  //   console.log(hits);
  // },[])
  // <ol>
  //   {hits.map((hit: any) => (
  //     <li key={hit.objectID} style={{ backgroundColor: "grey" }}>
  //       {hit.title}
  //     </li>
  //   ))}
  // </ol>
  <div className="ais-Hits">
    <ul className="ais-Hits-list">
      {hits.map((hit: any) => (
        <li
          className="ais-Hits-item"
          key={hit.objectID}
          // style={{ backgroundColor: "grey" }}
        >
          <NextLink href={`/blog/${hit.slug}`}>{hit.title}</NextLink>
        </li>
      ))}
      {/* <li className="ais-Hits-item">あああ</li>
      <li className="ais-Hits-item">おおお</li>
      <li className="ais-Hits-item">ぁっぁぁ</li> */}
    </ul>
  </div>
  // <ol>
  //   {hits.map((hit: any) => (
  //     <li key={hit.objectID} style={{ backgroundColor: "grey" }}>
  //       {hit.title}
  //     </li>
  //   ))}
  // </ol>
);

const CustomHits = connectHits(Hitss);

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const [searchQuery, setSearchQuery] = React.useState("");

  const resultsState = {
    // Object created on the server with `findResultsState`
  };
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {/*
             basePath を利用する場合は、リンク系はnext/linkかnext/routerを使わないと行けない。→ つまりmuiのlinkは使わないこと！
             https://nextjs.org/docs/api-reference/next.config.js/basepath

             NextLinkのpassHref は重要
           * https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
           */}
          <NextLink href="/" passHref>
            <MuiLink underline="hover">{title}</MuiLink>
          </NextLink>
        </Typography>

        {/* <InstantSearch
          searchClient={searchClient}
          indexName="paths_are"
          // resultsState={resultsState}
          refresh={true}
          stalledSearchDelay={10}
        >
          <SearchBox />
          <Hits />
        </InstantSearch> */}
        <div>
          <InstantSearch
            indexName="paths_are"
            searchClient={searchClient}
            onSearchStateChange={(searchState) => {
              // use the searchState
              console.log(searchState);
              setSearchQuery(searchState.query);
            }}
            // onClick={(event: any) => {
            //   console.log(event.currentTarget);
            // }}
            // searchState={{
            //   query: "iphone",
            //   refinementList: {
            //     brand: ["Apple"],
            //   },
            // }}
          >
            <SearchBox />
            {searchQuery.length > 0 ? (
              <div style={{ position: "absolute", zIndex: 100 }}>
                {/* <Hits /> */}
                <CustomHits />
              </div>
            ) : // <Hits hitComponent={Hit} />
            null}
          </InstantSearch>
        </div>
        <IconButton></IconButton>
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "left", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <NextLink key={section.title} href={`/${section.url}`} passHref>
            <MuiLink
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </MuiLink>
          </NextLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
