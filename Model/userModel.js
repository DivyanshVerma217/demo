const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, require},
    email:{type:String, require},
    password:{type:String, require},
    role:{type:String, require}

},{
    timestamps: true,
})

module.exports = mongoose.model('user', userSchema)