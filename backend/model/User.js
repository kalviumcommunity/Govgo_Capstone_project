const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    aadhaarNumber: { type: String, required: true, unique: true },
    role: { type: String, enum: ['Civilian', 'Official'], required: true },
    passwordHash: { type: String, required: true },
    state: String,
    district: String,
    preferredOffice: String,
    department: String,
    workingHours: {
        startTime: String,
        endTime: String
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
