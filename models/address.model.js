import mongoose from "mongoose";
const address = new mongoose.Schema( {
    address_line : {
        type : String,
        default : ""
    },
    city : {
        type : String,
        default : ""
    },
    state : {
        type : String,
        default : ""
    },
    pincode : {
        type : Number,

    },
    country : {
        type : String
    },
    mobile : {
        type : Number,
        default : null
    }

    
}, {
    timestamps : true
})

const AddressModel = mongoose.model('address', addressSchema)

export default AddressModel
