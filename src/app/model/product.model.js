const mongoose = require("mongoose");
slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:{type: String,unique:true}, // String is shorthand for {type: String}
  author: String,
  authorId:String,
  authorAvatar:String,
  slug: {type:String,slug:'title'}, // String is shorthand for {type: String}
  src: String,
  commentCount:Number,
  description: String, // String is shorthand for {type: String}
  like:{type:Number}
});
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
