import mongoose from "mongoose";
import Blog from "./Blog";


const article = new Blog({
  title: "Awesome Post",
  slug: "awesome-post",
  published: true,
  content: "This is the best post ever",
  tags: ["featured", "announcement"],
});

// insert the article in our MongoDB database

await article.save();

const firstArticle = await Blog.findOne({});

console.log(firstArticle);

const article2 = await Blog.create({
  title: "Awesome Post2",
  slug: "awesome-post2",
  published: true,
  content: "This is the best post ever2",
  tags: ["featured2", "announcement2"],
});

console.log(article2);
