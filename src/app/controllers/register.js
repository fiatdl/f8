const User = require("../model/user.model");

class Resister {
  index(req, res, next) {
    res.render("register");
  }
  load(req, res, next) {
    const NewUser = new User({
      username: req.body.gmail, // String is shorthand for {type: String}
      password: req.body.password,

      age: req.body.age,
      post: [],
      gmail: req.body.gmail,
      avatar: req.file.originalname,
      realName: req.body.realName,
      Role: "user",
    });

    NewUser.save();
    
    res.redirect("/")
  }
  add(req, res, next) {
    res.json(req.body);
  }
  // const NewUser= new User({

  // })
}
module.exports = new Resister();
