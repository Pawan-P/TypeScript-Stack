const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    mobile: Number
});

const User = mongoose.model('USER', userSchema);
module.exports = User;