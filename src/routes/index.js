const BlogsRouter = require("./blogs");
const AddRouter = require("./add");
const LoginRouter = require("./login");
const SelfRouter = require("./seflBlog");
const Resister = require("./register");
const Blogs = require("../app/model/product.model");
const blogs = require("../app/controllers/blogs");
const UserRouter=require("./user");
function Route(app) {
  app.get("/", (req, res) => {
    const q = Blogs.find()
      .limit(2)
      .then((data) => {
        data = data.map((blogs) => blogs.toObject());
        return res.render("home", { data });
      })
      .catch((err) => console.log(err));
  });
  app.use("/register", Resister);
  app.use("/selfBlog", SelfRouter);
  app.use("/blogs", BlogsRouter);
  app.use("/create", AddRouter);
  app.use("/login", LoginRouter);
  app.use("/user",UserRouter);
}
module.exports = Route;
