import * as React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useRouter } from "next/router";
import { dateFormat } from "../../libs/dateFormat";

interface FeaturedPostProps {
  post: {
    id: string;
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    linkText: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;
  const router = useRouter();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea
        component="a"
        onClick={() => {
          router.push(`/post/${post.id}`);
        }}
      >
        <Card
          sx={{
            display: { xs: "blox", sm: "flex" },
            minHeight: 160,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              display: { xs: "block", sm: "none" },
            }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {dateFormat(post.date)}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary"></Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              display: { xs: "none", sm: "block" },
            }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
