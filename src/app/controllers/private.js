const blogs = require("../model/product.model");
const users=require("../model/user.model")
class BlogsController {
  index(req, res, next) {
    
    blogs
      .find({authorId:req.cookies.id})
      .then((blogs) => {
        blogs = blogs.map((item) => item.toObject());
        const user={avatar :req.cookies.avatar,name:req.cookies.username,password:req.cookies.password};
        const yes = req.cookies.token ? true : false;
        res.render("private", { blogs, yes,user });
      })
      .catch(next);
  }
  delete(req,res,next){
           res.end("djit mm ")
  }

  show(req, res, next) {
    blogs
      .findOne({ slug: req.params.slug })
      .then((blogs) => {
        blogs = blogs ? blogs.toObject() : blogs;

        res.render("blog", { blogs });
      })
      .catch(next);
  }
}
module.exports = new BlogsController();
