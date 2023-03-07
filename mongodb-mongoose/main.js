import mongoose from "mongoose";
import Blog from "./Blog";

mongoose.connect(
   mongosh "mongodb+srv://cluster0.x0pwnxu.mongodb.net/myFirstDatabase" --apiVersion 1 --username fuhsuh
);

//   "mongodb+srv://fuhsuh:Bzion2020@cluster0.x0pwnxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// create a new blog post object

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
