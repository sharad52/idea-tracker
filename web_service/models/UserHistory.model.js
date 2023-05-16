const mongoose = require("mongoose");

const propertyHisorySchema = new mongoose.Schema({
    value: { type: String, default: "" },
    whenModified: { type: Date, default: Date.now() }
});

const userHistorySchema = new mongoose.Schema({
    firstNameHistory: [propertyHisorySchema],
    lastNameHistory: [propertyHisorySchema],
    rankHistory: [propertyHisorySchema],
    emailHistory: [propertyHisorySchema],
});

module.exports = userHistorySchema;