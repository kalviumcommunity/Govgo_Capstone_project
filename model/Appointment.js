const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    officialId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    department: { type: String, required: true },
    service: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    mode: { type: String, enum: ["In-person", "Online Video Call"], required: true },
    reason: String,
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Rescheduled", "Cancelled", "Completed"],
        default: "Pending"
    },
    uploadedDocuments: [String],
    otpVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
