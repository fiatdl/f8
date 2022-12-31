var Cookies = require("cookies-js");
class LogOutController {
    index(req, res, next) {
        res.clearCookie("token");
        console.log(req.cookies);
        res.redirect("/login");
    }
  }
  module.exports = new LogOutController();
  