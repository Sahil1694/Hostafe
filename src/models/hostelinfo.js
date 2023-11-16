const mongoose = require("mongoose");


const hosteInfo = new mongoose.Schema({
    hostelName:{
        type: String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    hostelImage:{
        data:Buffer,
        contentType:String
    },
    Location:{
        type: String,
        required:true
    },
    Clg:{
        type: String,
        required:true,
    },
    hostelType:{
        type: String,
        required:true
    },
})

const HostelInfo = new mongoose.model("HostelInfo",hosteInfo);

module.exports = HostelInfo;





