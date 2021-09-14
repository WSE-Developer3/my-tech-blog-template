import * as React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
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
      <Box
        sx={{
          p: 2,
          mr: { xs: 0, sm: 0, md: 2 },
          // backgroundColor: "#ebf5fb",
          backgroundColor: "#fff",
          borderRadius: "4px",
          boxShadow: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {tag && `${tag}に関する`}
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
      </Box>
    </Grid>
  );
}
