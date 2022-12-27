const blogs = require("../model/product.model");
const user = require("../model/user.model");
var jwt = require("jsonwebtoken");
var Cookies = require("cookies-js");
class AddController {
  index(req, res, next) {
    res.render("addBlog");
  }
  post(req, res, next) {
    const love = req.cookies;
console.log(love);
    if (req.cookies["token"]!==null) {
      var decoded = jwt.verify(love.token, "fiat");

      user
        .updateOne({ username: decoded.username }, { age: 50 })
        .then(() => console.log("ss"))
        .catch(() => console.log("met"));
      // user
      //   .findOne({ username: decoded.username })
      //   .then((data) => console.log(data))
      //   .catch((err) => console.log(err));
      const blog = new blogs({
        author: req.body.author,
        title: req.body.title,
        like:0,
        description: req.body.description,
        src: req.file.originalname,
      });
      blog.save();
      res.redirect("/blogs");
    } else {
      res.redirect("/login");
    }
  }
}
module.exports = new AddController();
