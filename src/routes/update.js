const express = require("express");
const router = express.Router();
const updateController = require("../app/controllers/update");
// router.get("/slug", SelfBlogController.private);
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./src/public/img/user");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });
  
  var upload = multer({ storage: storage }).single("avatar");
  
router.get("/", updateController.index);
router.post("/:id",upload,updateController.update,updateController.updatePassword);

module.exports = router;
