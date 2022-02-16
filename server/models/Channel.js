const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const channelSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true }
},
{
    versionKey: false // set to false then it wont create in mongodb
});

channelSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Channel', channelSchema);