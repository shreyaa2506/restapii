const Product= require("../models/product");

const getAllProducts= async(req,res)=>{
    const{name,category,id,price,colors,description,image,featured,sort,select}=req.query;
    const queryObject ={};
    if(category){
        queryObject.category=category;
    }
    if(name){
        queryObject.name={$regex:name, $options:"i"};
    }
    if(id){
        queryObject.id=id;
    }
    if(price){
        queryObject.price=price;
    }
    if(colors){
        queryObject.colors=colors;
    }
    if(description){
        queryObject.description=description;
    }
    if(image){
        queryObject.image=image;
    }
    if(featured){
        queryObject.featured=featured;
    }
    let apiData = Product.find(queryObject);
    if(sort){
        let sortfix = sort.replace(","," ");
        apiData = apiData.sort(sortfix);
    }
    if(select){
        let selectfix= select.split(",").join(" ");
        apiData=apiData.select(selectfix);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 12;
    let skip = (page-1)*limit;
    apiData= apiData.skip(skip).limit(limit);


    const myData= await apiData.sort(sort);
    res.status(200).json(myData);
};

const getAllProductsTesting= async(req,res)=>{
    const myData= await Product.find(req.query);
    res.status(200).json(myData);
};

module.exports={getAllProducts,getAllProductsTesting};
