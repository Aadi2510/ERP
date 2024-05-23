const mongoose = require('mongoose');

let teacherSchema = new mongoose.Schema({
    email:  {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    password: String,
    name: String,
    sallery: String,
    batches: String,
    image:String
    
},
{
    timestamps: true
})

module.exports = mongoose.model('teacherData', teacherSchema)
