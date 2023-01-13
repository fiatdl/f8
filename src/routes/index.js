const BlogsRouter = require("./blogs");
const AddRouter = require("./add");
const LoginRouter = require("./login");
const updateRouter = require("./update");
const Resister = require("./register");
const Blogs = require("../app/model/product.model");
const blogs = require("../app/controllers/blogs");
const LogOut=require("./logout");
const Home=require("./home");
const UserRouter=require("./user");
function Route(app) {
 
  app.use("/",Home);
  app.use("/logout",LogOut);
  app.use("/register", Resister);
  app.use("/update", updateRouter);
  app.use("/blogs", BlogsRouter);
  app.use("/create", AddRouter);
  app.use("/login", LoginRouter);
  app.use("/user",UserRouter);
}
module.exports = Route;
