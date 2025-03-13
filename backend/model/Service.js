const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    department: { type: String, required: true },
    serviceName: { type: String, required: true },
    description: String
});

module.exports = mongoose.model("Service", serviceSchema);
    