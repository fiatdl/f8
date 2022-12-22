const BlogsRouter= require("./blogs");
const AddRouter=require("./add");
const LoginRouter=require("./login");
const SelfRouter=require("./seflBlog")
function Route(app) {
  app.get("/", (req, res) => res.render("home"));
  app.use("/selfBlog",SelfRouter);
  app.use("/blogs",BlogsRouter);
  app.use("/create",AddRouter);
  app.use("/login",LoginRouter);
}
module.exports = Route;
