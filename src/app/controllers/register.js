const multer = require("multer");
const User=require('../model/user.model');
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});


var upload = multer({ storage: storage }).single("imgFile");

class Resister {
  index(req, res, next) {
    res.render("register");
  }
  load(req, res, next) {
 
    upload(req, res, function (err) {
      if (err) {
       console.log("khong quan trong")
      } else {
        console.log("khong quan trong")
      }
    });
   res.json(req.body);
    const NewUser= new User({


    })

  }
}
module.exports = new Resister();
