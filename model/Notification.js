const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
    type: { type: String, enum: ["SMS", "Email"], required: true },
    status: { type: String, enum: ["Pending", "Sent", "Failed"], default: "Pending" },
    scheduledTime: { type: Date, required: true },
    sentTime: { type: Date }
});

module.exports = mongoose.model("Notification", notificationSchema);
