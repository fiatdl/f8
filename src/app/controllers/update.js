const user = require("../model/user.model");
const jwt = require("jsonwebtoken");
const Cookies = require("cookies-js");
let alert = require("alert");
const { json } = require("body-parser");

class updateController {
  index(req, res, next) {
    let LoginToken = req.cookies.token;

    let decoded = jwt.verify(LoginToken, "fiat");

    if (decoded) {
      user
        .findOne({ email: decoded.name })
        .then((us) => {
          us = us ? us.toObject() : us;
          const user = {
            id:req.cookies.id,
            avatar: req.cookies.avatar,
            name: req.cookies.username,
            password: req.cookies.password,
          };
          const yes = req.cookies.token ? true : false;
          res.render("update", { yes, user,us });
        })
        .catch((err) => console.log("err"));
    } else {
      res.render("/login");
    }
  }
  async update(req, res, next) {
    try {if(req.file){
      res.cookie("avatar", req.file.originalname);
    }

      user.findByIdAndUpdate(
        req.params.id,
        {
          age: req.body.age,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          fullName: req.body.fullName,
          avatar: req.cookies.avatar,
        },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated User : ", docs);
          }
        }
      );

      next();
    } catch (err) {
      return res.status(500).send({
        message: err.message + "ddsdsad",
      });
    }
  }
  async updatePassword(req, res) {
    if (req.body.oldPassword !== "") {
      if (req.body.newPassword === req.body.newPasswordConfirm) {
        try {
          user.findByIdAndUpdate(
            req.params.id,
            {
              password: req.body.newPassword,
              // avatar: req.file.originalname||"",
            },
            function (err, docs) {
              if (err) {
                console.log(err);
              } else {
                console.log("Updated User : ", docs);
              }
            }
          );
          alert("password changed");
          res.redirect("/");
        } catch (err) {
          return res.status(500).send({
            message: err.message + "thu 2 ",
          });
        }
      } else {
        alert("wrong confirm password");
      }
    } else {
      res.redirect("/update");
    }
  }
}
module.exports = new updateController();
