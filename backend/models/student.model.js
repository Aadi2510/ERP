const mongoose = require('mongoose');


let studentSchema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    password: String,
    class: String,
    marks: String,
    image:String
})


module.exports= mongoose.model('studentData', studentSchema)
