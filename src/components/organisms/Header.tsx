import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

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
