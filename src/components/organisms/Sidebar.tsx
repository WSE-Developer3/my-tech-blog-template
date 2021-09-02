import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MySearchBox from "../MySearchBox";
import MuiLink from "../../Link";

interface SidebarProps {
  // archives: ReadonlyArray<{
  //   url: string;
  //   title: string;
  // }>;
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    url: string;
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { /* archives, */ description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <MySearchBox />
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Typography
          key={network.name}
          variant="subtitle2"
          gutterBottom
          sx={{ mt: 1 }}
        >
          <MuiLink href={`${network.url}`}>
            <Stack direction="row" spacing={1} alignItems="center">
              <network.icon />
              <span>{network.name}</span>
            </Stack>
          </MuiLink>
        </Typography>
      ))}
    </Grid>
  );
}
