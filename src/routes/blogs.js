const express = require("express");
const router = express.Router();
const BlogsController = require("../app/controllers/blogs");
router.get("/:slug", BlogsController.show);
router.get("/", BlogsController.index);

module.exports = router;
