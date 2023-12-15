const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userScheme = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your Email is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

userScheme.pre('save', async function   (){
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userScheme)