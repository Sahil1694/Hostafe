const Hostel = require("../models/hostelinfo");
// const multer=require('multer')

// const Storage=multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     },
// });
// const upload=multer({
//     storage:Storage
// }).single('testImage')

const controller = {
    async addhostel(req, res,next){
        // try{
        //     const hostel=await Hostel.create({
        //         hostelName:req.body.hostelName,
        //         Description:req.body.Description,
        //         hostelImage:{
        //             data:req.file.filename,
        //             contentType:'image/jpg'
        //         },
        //         Location:req.body.Location,
        //         Clg:req.body.Clg,
        //         hostelType:req.body.hostelType
        //     })
        //     res.json({ success: true, result: hostel });
        // }catch(error){
        //     res.json({ success: false, error: error.message });
        // }
        const {hostelName,Description,hostelImage,Location,Clg,hostelType}=req.body
        const existingHostel=await Hostel.findOne({hostelName:hostelName})

        if(existingHostel){
            return res.status(400).json({message:"Hostel already exists"})
        }

        const hostel=await Hostel.create({hostelName,Location,Description,hostelImage,Clg,hostelType})
        res.send(hostel)
    },
    async gethostel(req , res , next){
        const hostel=await Hostel.find({Location:req.body.Location,hostelType:req.body.hostelType},{hostelName:1});
        res.send(hostel);
    },

    async gethosteldetails(req,res,next){
        const hosteldetails=await Hostel.find({hostelName:req.body.hostelName},{hostelName:1, Location:1});
        res.send(hosteldetails);
    }

}

module.exports=controller;

