const express = require('express');
const multer=require('multer')
const path=require('path')
const router = express.Router();
const controller = require("../controller/hostelinfo");


router.post('/AddHostel',controller.addhostel);
router.get("/gethostel",controller.gethostel);
router.get("/hosteldetails",controller.gethosteldetails);

module.exports=router
