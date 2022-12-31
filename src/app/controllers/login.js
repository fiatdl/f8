const user = require("../model/user.model");
var jwt = require("jsonwebtoken");
var Cookies = require("cookies-js");
class LoginController {
  index(req, res, next) {
    res.render("login");
  }
  login(req, res, next) {
   

    user
      .findOne({
        username: req.body.username,
      })
      .then((data) => {
        if (data) {
          if (data.password === req.body.password) {
            const token = jwt.sign({ name: req.body.username }, "fiat");

            res.cookie("token", token);
           
            res.redirect("/selfBlog");
          } else {
            res.render("/login");
          }
        } else {
          res.render("/login");
        }
      })
      .catch((err) => console.log(err));
  }
}
module.exports = new LoginController();
