import * as React from "react";
import {
  Toolbar,
  Typography,
  Link as MuiLink,
  Chip,
  Stack,
} from "@mui/material";
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
        sx={{ justifyContent: "left", overflowX: "auto", my: 1 }}
      >
        <Stack direction="row" spacing="1">
          {sections.map((section) => (
            <NextLink key={section.title} href={`/tag/${section.url}`} passHref>
              <MuiLink
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                underline="hover"
                sx={{
                  p: 1,
                  flexShrink: 0,
                  "& .MuiChip-root:hover": {
                    color: "#FFFFFF",
                    backgroundColor: "#556cd6",
                  },
                }}
              >
                <Chip label={section.title} variant="outlined" />
              </MuiLink>
            </NextLink>
          ))}
        </Stack>
      </Toolbar>
    </React.Fragment>
  );
}
