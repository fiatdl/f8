const express = require("express");
const router = express.Router();
const AddController = require("../app/controllers/addBlog");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./src/public/img/post");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });
  
  var upload = multer({ storage: storage }).single("PostFile");
  

router.get("/", AddController.index);
router.post("/post",upload, AddController.post);
module.exports = router;
