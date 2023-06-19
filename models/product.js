const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    id:{type:Number},
name: {
    type:String,
    required:true,
},
price: {type:Number,
        required:true},
category:{type:String,
            required:true} ,
colors: [],

description: {type:String, required:true},
image:{type:String,required:true},
featured:{type:Boolean,
        }

});
module.exports = mongoose.model("Product",productSchema);