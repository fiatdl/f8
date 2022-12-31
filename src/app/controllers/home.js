const user = require("../model/user.model");
const Blogs = require("../model/product.model");
var jwt = require("jsonwebtoken");
var Cookies = require("cookies-js");
const User = require("../model/user.model");

class HomeController {
  index(req, res, next) {
    const love = req.cookies.token;
    if (love) {
      Blogs.find()
        .limit(10)
        .then((data) => {
          data = data.map((blogs) => blogs.toObject());

          const yes = req.cookies.token ? true : false;
          return res.render("home", { data, yes });
        })
        .catch((err) => console.log(err));
    } else {
      res.render("login");
    }
  }
}
module.exports = new HomeController();
