const mongoose = require("mongoose");
slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  slug: {type:String,slug:'title'}, // String is shorthand for {type: String}
  src: String,
  description: String, // String is shorthand for {type: String}
  
});
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
