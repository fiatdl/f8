const express = require("express");
const router = express.Router();
const BlogsController = require("../app/controllers/private");
router.get("/:slug", BlogsController.show);
router.get("/", BlogsController.index);
router.delete("/",BlogsController.delete);
module.exports = router;