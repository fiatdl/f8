const blogs = require("../model/product.model");
class AddController {
  index(req, res, next) {
    res.render("addBlog");
  }
  post(req, res, next) {
    const blog = new blogs({
      author: req.body.author,
      title: req.body.title,

      description: req.body.description,
      src: "https://vcdn1-dulich.vnecdn.net/2022/03/18/119218817662774954346470407058-1806-5581-1647597051.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=bGYfcztb_UzX6tjQRbCjsg",
    });
    blog.save();
    res.redirect("/blogs");
  }
}
module.exports = new AddController();
