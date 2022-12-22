const blogs = require("../model/product.model");
const jwt = require("jsonwebtoken");
const Cookies = require("cookies-js");
class SelfBlogController {
  index(req, res, next) {
    let LoginToken = req.cookies.token;

    let decoded = jwt.verify(LoginToken, "fiat");
    if (decoded) {
      res.render("selfBlog");
    } else {
      res.json("dang nhap di ");
    }
  }
}
module.exports = new SelfBlogController();
