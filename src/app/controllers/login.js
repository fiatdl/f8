const user = require("../model/user.model");
var jwt = require("jsonwebtoken");
var Cookies = require("cookies-js");
class LoginController {
  index(req, res, next) {
    res.render("login");
  }
  test(req, res, next) {
    console.log(req.body);
    const us = new user({
      username: req.body.username,
      password: req.body.password,
    });
    us.save();
    res.redirect("/");
  }
  login(req, res, next) {
    //     const token = jwt.sign({ name: req.body.username }, 'fiat');
    //     var decoded = jwt.verify(token, 'fiat');
    // console.log(decoded.name) // bar
    user
      .findOne({
        username: req.body.username,
        password: req.body.password,
      })
      .then((data) => {
        if (data) {
          const token = jwt.sign({ name: req.body.username }, "fiat");
          res.cookie("token", token);
        res.redirect('/selfBlog');
        } else {
          res.json("that bai");
        }
      })
      .catch((err) => console.log(err));
  }
}
module.exports = new LoginController();
