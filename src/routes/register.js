const express = require("express");
const router = express.Router();
const ResisterRouter=require("../app/controllers/register");


router.get("/",ResisterRouter.index);
router.post("/",ResisterRouter.checkEmailExist,ResisterRouter.load);
module.exports= router;