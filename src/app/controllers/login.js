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
        email: req.body.username,
      })
      .then((data) => {
        if (data) {
          if (data.password === req.body.password) {
            const token = jwt.sign({ name: req.body.username }, "fiat");
       
           res.cookie("id",data._id);
            res.cookie("token", token);
            res.cookie("avatar",data.avatar);
            res.cookie("username",data.fullName);
           res.cookie("password",data.password);
          
            res.redirect("/");
          } else {
            res.render("login");
          }
        } else {
          res.render("login");
        }
      })
      .catch((err) => console.log(err));
  }
}
module.exports = new LoginController();
