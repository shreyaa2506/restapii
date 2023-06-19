const mongoose = require("mongoose");


const connectdb=(uri)=>{
    console.log("connect db");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports=connectdb;