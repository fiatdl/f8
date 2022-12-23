const express = require("express");
const router = express.Router();
const SelfBlogController = require("../app/controllers/selfBLog");
// router.get("/slug", SelfBlogController.private);
router.get("/", SelfBlogController.index);
module.exports = router;
