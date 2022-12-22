const blogs = require("../model/product.model");
class BlogsController {
  index(req, res, next) {
    blogs
      .find({})
      .then((blogs) => {
        blogs = blogs.map((item) => item.toObject());

        res.render("Blogs", { blogs });
      })
      .catch(next);
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
