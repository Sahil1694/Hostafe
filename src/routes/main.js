const express = require('express');



const routes = express.Router();

// const Index = require("../models");

routes.get("/landing" , function(req, res){
    res.sendFile("index.html" , {root: __dirname});
});


module.exports = routes;