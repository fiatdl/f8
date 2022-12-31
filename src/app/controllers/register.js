const User = require("../model/user.model");
class Resister {
  index(req, res, next) {
    res.render("register");
  }
  load(req, res, next) {
    // const accountExist=User.count({email:req.body.email}, { limit: 1 })
    //   if(accountExist===1)
    //   {
    //     res.render("register",{data:req.body,wrong:"email exited"})
    //   }

    if(req.body.password===req.body.passwordChecking){
    const NewUser = new User({
      username: req.body.email, // String is shorthand for {type: String}
      password: req.body.password,

      age: null,
      post: [],
      gmail: req.body.email,
      avatar: "",
      realName: req.body.fullName,
      Role: "user",
    });
    NewUser.save();

    res.redirect("/login");
  }
  else{
    res.render("register",{data:req.body,wrong:true})
  }
  }
}
module.exports = new Resister();
