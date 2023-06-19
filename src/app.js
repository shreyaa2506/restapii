const express = require("express");
require("dotenv").config();
const cors = require('cors');



const app = express();

const connectdb= require("../db/connect");
const port = process.env.PORT || 8087;

const products_routes = require("../router/products");


app.get("/",(req,res)=>{
    res.send("welcome to shreya's art haven");
});

app.use(cors());
app.use("/api/products",products_routes);

const start = async()=>{
    try{
        await connectdb(process.env.MONGODB_URL);
        app.listen(port, ()=>{
            console.log(`i am connected at ${port}`);
        })
    }
    catch(error){
        console.log(error);
    }

};


start();
