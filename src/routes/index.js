const BlogsRouter= require("./blogs");
const AddRouter=require("./add");
const LoginRouter=require("./login")
function Route(app) {
  app.get("/", (req, res) => res.render("home"));
  app.use("/blogs",BlogsRouter);
  app.use("/create",AddRouter);
  app.use("/login",LoginRouter);
}
module.exports = Route;
    