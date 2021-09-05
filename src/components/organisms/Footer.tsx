import * as React from "react";
import { Container, Box, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography
      variant="body2"
      sx={{ color: "secondary.light" }}
      align="center"
    >
      {`Copyright © Paths are - Shinkawa Shinji `}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      color="secondary.main"
      boxShadow={5}
      sx={{
        bgcolor: "#20232a",
        mt: 2,
        py: 6,
        // color: "#fff",
        /**
         * ページの内容量が少なくてもフッターを下に固定する
         */
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          sx={{ color: "secondary.light" }}
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
