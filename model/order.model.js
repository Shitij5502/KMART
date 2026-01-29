import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : String,
        ref : 'User'
    },
    orderId : {
        type : String,
        required: [true, "provide orderId"],
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        default : ""
    },
    product_details : {
        
        name : String,
        image : Array,

    },
    paymentId : {
        type : String,
        default : ""
    },
    paymentStatus : {
        type : String,
        default : ""
    },
    deliveryAddress : {
        type : mongoose.Schema.ObjectId,
        ref : 'address'
    },
    subTototalAmt : {
        type : Number,
        default : 0
    },
    totalAmt : {
        type : Number,
        default : 0
    },
    invoice_receipt : {
        type : String,
        default : ""
    }


},{
    timestamps : true
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel