const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    branchid:{
        type:String,
        required:true
    },
    branchname:{
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
    contactnumber:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        default:true
    },
    establishdate:{
        type:String,
        required:true

    },
    typeofcompany:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Posts',postSchema)