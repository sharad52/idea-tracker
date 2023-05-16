const mongoose = require("mongoose");
const userHistorySchema = require("./UserHistory.model");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        index: {unique: true},
    },
    password: {
        type: String,
    },
    numIdeasSubmitted: {
        type: Number,
    },
    numCommentsLeft: {
        type: Number,
    },
    signUpDate: {
        type: Date,
        default: Date.now(),
    },
    lastLoginDate: {
        type: Date,
        default: Date.now(),
    },
    numLogins: {
        type: Number,
        default: 1,
    },
    hubspotContactId: {
        type: String,
        index: true,
    },
    rank: {
        type: String,
    },
    propertyHistory: {
        type: userHistorySchema
    },
    
});


const User = mongoose.model("User", userSchema);

module.exports = User;