const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    //_id: { type: Schema.Types.ObjectId },
    nickname: { type: String, required: true, unique: true }
},
{
    versionKey: false // set to false then it wont create in mongodb
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);