const mongoose = require("mongoose");
slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  password: String,

});
const User = mongoose.model("Users", UserSchema);
module.exports = User;
