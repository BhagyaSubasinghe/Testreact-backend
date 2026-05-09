const mongose = require('mongoose');
const Schema = mongose.Schema;

const userSchema = new Schema({
    id : Number,
    name : String,
});

const User = mongose.model('User', userSchema);

module.exports = User;