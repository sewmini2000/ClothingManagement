const mongoose = require('mongoose');

const compSchema = new mongoose.Schema({



    customername:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactnumber:{
        type:String,
        required:true
    },
    invoicenumber:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    productno:{
        type:String,
        required:true
    },
    complaintdate:{
        type:String,
        required:true
    },
    complainttakeby:{
        type:String,
        required:true
    },
    responseaction:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('comp',compSchema)