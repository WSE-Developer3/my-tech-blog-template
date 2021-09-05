import * as React from "react";
import { Paper, Grid, Stack, Typography, Link as MuiLink } from "@mui/material";
import MySearchBox from "../MySearchBox";
import Avatar from "@mui/material/Avatar";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

interface SidebarProps {
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
      <Paper
        elevation={0}
        sx={{ p: 2, bgcolor: "grey.200", backgroundColor: "#ebf5fb" }}
      >
        <Grid container sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Grid xs={8}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              {title}{" "}
            </Typography>
          </Grid>
          <Grid xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            {/* <Avatar alt="アイコン" sx={{ width: 56, height: 56, boxShadow: 1 }}> */}
            <InsertEmoticonIcon fontSize="large" sx={{ color: "#556cd6" }} />
            {/* </Avatar> */}
          </Grid>
        </Grid>

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
