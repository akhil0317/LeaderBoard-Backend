var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    rank: {
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required:true,
        trim:true
    },
    platform:{
        type: String,
        required: true,
        trim: true
    },
    year:{
        type: Number,
        required: true
    },
    genre:{
        type: String,
        required: true,
        trim: true
    },
    publisher:{
        type: String,
        required: true,
        trim: true
    },
    globalSales:{
        type:String,
        required: true
    }
})


module.exports = mongoose.model("UserData",userSchema)