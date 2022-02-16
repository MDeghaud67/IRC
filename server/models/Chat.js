const mongoose = require('mongoose');

const  chatSchema = mongoose.Schema({
    message: { type: String }
    //sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
{
    versionKey: false // set to false then it wont create in mongodb
});

module.exports = mongoose.model('Chat', chatSchema);