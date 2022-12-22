const express = require("express");
const router = express.Router();
const AddController = require("../app/controllers/addBlog");

router.get("/", AddController.index);
router.post("/post", AddController.post);
module.exports = router;
