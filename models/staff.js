const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({

    staffid:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    contactnumber:{
        type:String,
        required:true
    },
    arrivaltime:{
        type:String,
        default:true
    },
    workinghours:{
        type:String,
        required:true

    }

});

module.exports = mongoose.model('staff',staffSchema)