const user = require("../model/user.model");
const jwt = require("jsonwebtoken");
const Cookies = require("cookies-js");
class SelfBlogController {
  index(req, res, next) {
    let LoginToken = req.cookies.token;

    let decoded = jwt.verify(LoginToken, "fiat");
    console.log(decoded);
    if (decoded) {
      user
        .findOne({ username: decoded.name })
        .then((us) => {
          us = us ? us.toObject() : us;
          console.log(us);
          res.render("selfBlog",{user: us});
        })
        .catch((err) => console.log("err"));
    } else {
      res.render("/login");
    }
  }
}
module.exports = new SelfBlogController();
