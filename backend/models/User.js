const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    familySize: { type: Number, required: true },
    carbonPrintEnergy: { type: Number, required: true },
    carbonPrintTransport: { type: Number, required: true },
    waterUsageQu: { type: Number, required: true },
    carbonPrintReduction: { type: Number, required: true }, 
    carbonPrintFood: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
