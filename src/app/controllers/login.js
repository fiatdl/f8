const user = require("../model/user.model");
var jwt = require("jsonwebtoken");
var Cookies = require("cookies-js");
class LoginController {
  index(req, res, next) {
    res.render("login",{loginform:true});
  }

  async checkEmail(req, res, next) {
    await user.find({ email: req.body.username }).then((docs) => {
      if (docs.length === 0) {
        res.render("login", {
          message: "tài khoản chưa  được đăng kí",
          announce: true,
        });
      }
    });
    next();
  }

  login(req, res, next) {
    user
      .findOne({
        email: req.body.username,
      })
      .then((data) => {
        if (data) {
          if (data.password === req.body.password) {
            const token = jwt.sign({ name: req.body.username }, "fiat");
            res.cookie("id", data._id);
            res.cookie("token", token);
            res.cookie("avatar", data.avatar);
            res.cookie("username", data.fullName);
            res.cookie("password", data.password);
            
            var string = encodeURIComponent('bạn đã đăng nhập thành công');
            res.redirect('/?valid=' + string);
          } else {
            res.render("login", {
              message: "sai mật khẩu",
              announce: true,
            });
          
          }
        } else {
          res.render("login");
        }
      })
      .catch((err) => console.log(err));
  }
}
module.exports = new LoginController();
