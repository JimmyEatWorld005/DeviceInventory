const mongoose = require('mongoose');
const PrinterSchema = new mongoose.Schema({
    printerName: {
        type: String,
        required: [true, "A printer name is required"],
        minlength: [7, "A printer name is required to be at least 7 characters long"]
    },
    assetNumber: {
        type: String,
        required: [true, "An asset number is required"],
        minlength: [6, "An asset number is required to be at least 6 characters long"]
    },
    ipAddress: {
        type: String,
        required: [true, "An IP address is required"],
        minlength: [8, "An IP address is required to be at least 8 characters"]
    },
    printerType: {
        type: String,
        required: [true, "Printer type is required"],
        enum: {
            values: ['Multifunction', 'Laserjet', 'Label', 'POS'],
            message: '{VALUE} is not suported'
        }
    },
    printerDriver: {
        type: String,
        required: [true, "Printer driver is required"],
        enum: {
            values: ['HP Universal', 'Citizen', 'Epson'],
            message: '{VALUE} is not suported'
        }
    },
    addressStreet: {
        type: String,
        required: [true, "Location street address is required"],
        minlength: [3, "Street address is required to be 3 characters"]
    },
    addressCity: {
        type: String,
        required: [true, "City is required"],
        minlength: [2, "City is required to be at least two characters"]
    },
    addressState: {
        type: String,
        required: [true, "State is required"],
        minlength: [2, "State is required to be a minimum of two characters"],
        maxlength: [2, "State is required to be a maximum of two characters"]
    },
    addressZipCode: {
        type: Number,
        required: [true, "Zip Code is required"],
        minlength: [5, "State is required to be a minimum of five numerical characters"],
        maxlength: [5, "State is required to be a maximum of five numerical characters"]
    },
}, {
    timestamps: true,
    collection: 'printers',
    },
);
module.exports = mongoose.model('Printer', PrinterSchema);