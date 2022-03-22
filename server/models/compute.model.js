const mongoose = require('mongoose');
const ComputeSchema = new mongoose.Schema({
    computerName: {
        type: String,
        required: [true, "A PC name is required"],
        minlength: [8, "A PC name is required to be at least 8 characters long"]
    },
    assetNumber: {
        type: String,
        required: [true, "An asset number is required"],
        minlength: [6, "An asset number is required to be at least 6 characters long"]
    },
    cpu: {
        type: Number,
        required: [true, "The number of CPUs is required"],
        minlength: [1, "The number of CPUs is required to be at least one number character"]
    },
    memory: {
        type: Number,
        required: [true, "The amout of memory is required"],
        minlength: [1, "The amount of memory is required to be at least one number character in GB"]
    },
    operatingSystem: {
        type: String,
        required: [true, "The operating system is required"],
        enum: {
            values: ['Windows 11', 'Windows 10', 'Windows 7', 'macOS 12(Monterey)', 'macOS 11 (Big Sur)', 'macOS 10.15 (Catalina)'],
            message: '{VALUE} is not supported'
        }
    },
}, {
    timestamps: true,
    collection: 'computers',
    },
);
module.exports = mongoose.model('Compute', ComputeSchema);