const mongoose = require("mongoose");
slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {type:String,  unique: true }, // String is shorthand for {type: String}
  password: String,
  date: { type: Date, default: Date.now },
  age:     { type: Number, min: 0, max: 120 },
  post:[String],
  gmail:String ,
  avatar:String,
  realName:String,
  Role:String,
  slug: {type:String,slug:'username'},


});
const User = mongoose.model("Users", UserSchema);
module.exports = User;
