const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    userCar: {
        type: String,
        required: true,
    },
    maximumTopSpeed: {
        type: Number,
        required: true,
    },
    fuelConsumption: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Result = mongoose.model("Result", resultSchema);
