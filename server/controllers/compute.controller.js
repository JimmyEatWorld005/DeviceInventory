const Computer = require('../models/compute.model');

module.exports.createComputer = (req, res) => {
    Computer.create(req.body)
        .then(computer => res.json(computer))
        .catch(err => res.json(err));
}

module.exports.getAllComputers = (req, res) => {
    Computer.find({})
        .then(computer => {
            console.log(computer);
            res.json(computer);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports.getOneComputer = (req, res) => {
    Computer.findOne({_id:req.params.id})
        .then(computer => res.json(computer))
        .catch(err => res.json(err))
}

module.exports.updateComputer = (req, res) => {
    Computer.findOneAndUpdate({id: req.params.id}, req.body, {new:true})
        .then(updateComputer => res.json(updateComputer))
        .catch(err => res.json(err))
}

module.exports.deleteComputer = (req, res) => {
    Computer.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}