const users = require("../model/user.model");

class UserController {
  index(req, res, next) {
  
    res.render("user");
  }
  private(req,res,next){
    users
    .find({_id:req.params.id})
    .then((user) => {
        user = user ? user.toObject() : user;

      res.render("user", { user });
    })
    .catch(next);
  }
}
module.exports = new UserController();
