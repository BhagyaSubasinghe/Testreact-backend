const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    role: {
        type: String,
        default: 'User'
    },
    phone: String,
    notes: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;