import * as React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import PostItem from "../molecules/PostItem";
import { PostItemProps } from "../molecules/PostItem";

interface MainPostListProps {
  posts: ReadonlyArray<PostItemProps>;
  title: string;
  tag?: string;
}

export default function MainPostList(props: MainPostListProps) {
  const { posts, title, tag } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {tag && "[" + tag + "]に関する"}
        {title}
      </Typography>
      <Divider
        sx={{
          mb: 2,
        }}
      />
      <Grid container spacing={4}>
        {posts.map((post: any) => (
          <PostItem key={post.title} post={post} />
        ))}
      </Grid>
    </Grid>
  );
}
