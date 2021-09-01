import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";
// import algoliasearch from "algoliasearch/lite";
// import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom";

// const searchClient = algoliasearch(
//   "IJHEWO1FRR",
//   "3cdac3eb34cf5bf394e477e1584d8ef8"
// );

// const Hitss = ({ hits }: any) => (
//   <div className="ais-Hits">
//     <ul className="ais-Hits-list">
//       {hits.map((hit: any) => (
//         <li className="ais-Hits-item" key={hit.objectID}>
//           <NextLink href={`/blog/${hit.slug}`}>{hit.title}</NextLink>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const CustomHits = connectHits(Hitss);

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  // const [searchQuery, setSearchQuery] = React.useState("");

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
          <NextLink href="/" passHref>
            <MuiLink underline="hover">{title}</MuiLink>
          </NextLink>
        </Typography>

        {/* <div>
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
        </div> */}
        <IconButton></IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "left", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <NextLink
            key={section.title}
            href={`/category/${section.url}`}
            passHref
          >
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
