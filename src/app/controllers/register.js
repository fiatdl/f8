const User = require("../model/user.model");
class Resister {
  index(req, res, next) {
    res.render("register");
  }
  checkEmailExist(req, res, next) {
    User.find({ email: req.body.email })
      .then((docs) => {
       res.render("register",{emailExisted:True});
      })
      .catch((err) => console.log(err));
      next();
  }
  load(req, res, next) {
    if (req.body.password === req.body.passwordChecking) {
      const NewUser = new User({
        password: req.body.password,
        email: req.body.email,
        fullName: req.body.fullName,
        role: "user",
      });
      NewUser.save();

      res.redirect("/login");
    } else {
      res.render("register", { data: req.body, wrong: true });
    }
  }
}
module.exports = new Resister();
