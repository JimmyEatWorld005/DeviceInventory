const Printer = require('../models/printer.model');

module.exports.createPrinter = (req, res) => {
    Printer.create(req.body)
        .then(printer => res.json(printer))
        .catch(err => res.json(err));
}

module.exports.getAllPrinters = (req, res) => {
    Printer.find({})
        .then(printers => {
            console.log(printers);
            res.json(printers);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.getOnePrinter = (req, res) => {
    Printer.findOne({_id:req.params.id})
        .then(printer => res.json(printer))
        .catch(err => res.json(err))
}

module.exports.updatePrinter = (req, res) => {
    Printer.findOneAndUpdate({id: req.params.id}, req.body, {new:true})
        .then(updatePrinter => res.json(updatePrinter))
        .catch(err => res.json(err))
}

module.exports.deletePrinter = (req, res) => {
    Printer.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}