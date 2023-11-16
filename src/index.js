const express = require("express");
const app = express();
const port=5000;
const routes = require('./routes/main')
const mongoose = require('mongoose');
const path = require("path");
const staticPath = path.join(__dirname, "../public");

// app.use(express.static(staticPath))
app.use(express.json()) 

const registerRouter=require("./routes/register")
app.use('/register',registerRouter)

const hostelinfoRouter=require('./routes/hostelinfo')
app.use('/',hostelinfoRouter);

const dbConnection=require('./database/connect')
dbConnection.then(()=>{
    app.listen(port,()=>{
        console.log("http://localhost:"+ port );
    })
}).catch((error)=>{
    console.log("Problem to connect with database"+error);
});

// app.get("/" , function(req, res){
//     res.sendFile("index.html");
// });
 
// app.use('/' , routes);


