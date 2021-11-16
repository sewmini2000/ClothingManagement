const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({


    customername:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    postalcode:{
        type:String,
        required:true
    
    }


});

module.exports = mongoose.model('customer',customerSchema)