const blogs = require("../model/product.model");
const user = require("../model/user.model");
var jwt = require("jsonwebtoken");
var Cookies = require("cookies-js");
class AddController {
  index(req, res, next) {
    const user={avatar :req.cookies.avatar,name:req.cookies.username,password:req.cookies.password};
    const yes = req.cookies.token ? true : false;
    if(req.cookies.token){
    res.render("addBlog",{yes,user});
    }
    else{
      res.render("login");
    }
  }
  post(req, res, next) {
      
    
      const blog = new blogs({
        author: req.body.author,
        authorId:req.cookies.id,
        authorAvatar:req.cookies.avatar,
        title: req.body.title,
        like:0,
        description: req.body.description,
        src: req.file.originalname,
      });
      blog.save();
      user.findByIdAndUpdate(
        req.cookies.id,
        { $push: { post: blog._id } },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated User : ", docs);
          }
        }
      );
      res.redirect("/private");
  }
 
}
module.exports = new AddController();
