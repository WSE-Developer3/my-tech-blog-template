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

export interface PostItemProps {
  post: {
    date: string;
    description: string;
    image: string;
    featuredImage: any;
    imageLabel: string;
    title: string;
    id: string;
    publishedAt: string;
  };
}

export default function PostItem(props: PostItemProps) {
  const { post } = props;
  const router = useRouter();

  return (
    <Grid item xs={12}>
      <CardActionArea
        component="a"
        onClick={() => {
          router.push(`/post/${post.id}`);
        }}
      >
        <Card
          sx={{
            display: { xs: "blox", sm: "flex" },
            minHeight: 136,
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              display: { xs: "block", sm: "none" },
              // objectFit: "cover",
            }}
            image={post.featuredImage.url}
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
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              display: { xs: "none", sm: "block" },
              objectFit: "cover",
            }}
            image={post.featuredImage.url}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
