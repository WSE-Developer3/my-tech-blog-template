import * as React from "react";
import NextLink from "next/link";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom";
import Box from "@material-ui/core/Box";

const searchClient = algoliasearch(
  "IJHEWO1FRR",
  "3cdac3eb34cf5bf394e477e1584d8ef8"
);

const Hitss = ({ hits }: any) => (
  <div className="ais-Hits">
    <ul className="ais-Hits-list">
      {hits.map((hit: any) => (
        <li className="ais-Hits-item" key={hit.objectID}>
          <NextLink href={`/blog/${hit.slug}`}>{hit.title}</NextLink>
        </li>
      ))}
    </ul>
  </div>
);
const CustomHits = connectHits(Hitss);

const MySearchBox = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    // <Grid item xs={12} md={12}>
    <Box mb={3}>
      <InstantSearch
        indexName="paths_are"
        searchClient={searchClient}
        onSearchStateChange={(searchState) => {
          setSearchQuery(searchState.query);
        }}
      >
        <SearchBox />
        {searchQuery.length > 0 ? (
          <div style={{ position: "absolute", zIndex: 100 }}>
            <CustomHits />
          </div>
        ) : null}
      </InstantSearch>
    </Box>
    // </Grid>
  );
};
export default MySearchBox;
