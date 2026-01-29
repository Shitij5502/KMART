import mongoose, { Schema } from "mongoose";

const product = new mongoose.Schema({
    name : {
        type : String,
        default : "John Doe",

    },
    image : {
        type : String,
        default : ""
    }

    
},{
    timestamps : true
})

const CategoryModel = mongoose.model('category', CategoryModel)

export default CategoryModel