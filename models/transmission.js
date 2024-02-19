const mongoose = require('../../database');

const TransmissionSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        phoneNumbers: {
            type: Array,
        },        
        name: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Transmission = mongoose.model('Transmission', TransmissionSchema);

module.exports = Transmission;
