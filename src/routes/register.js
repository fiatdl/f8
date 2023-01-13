const express = require("express");
const router = express.Router();
const ResisterRouter=require("../app/controllers/register");


router.get("/",ResisterRouter.index);
router.post("/cc",ResisterRouter.load);
module.exports= router;