const mongoose = require('mongoose');

const profitSchema = new mongoose.Schema({

    itemname:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('profit',profitSchema)