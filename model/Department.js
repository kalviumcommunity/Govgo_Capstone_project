const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    departmentName: { type: String, required: true },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }]
});

module.exports = mongoose.model("Department", departmentSchema);
