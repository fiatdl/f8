const express = require("express");
const router = express.Router();
const ResisterRouter=require("../app/controllers/register");
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./upload");
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
  });
  
  var upload = multer({ storage: storage }).single("imgFile");
  

router.get("/",ResisterRouter.index);
router.post("/cc",upload,ResisterRouter.load);
module.exports= router;