const ComputeController = require('../controllers/compute.controller');

module.exports = (app) => {
    app.get("/computers", ComputeController.getAllComputers);
    app.post("/computers/new/", ComputeController.createComputer);
    app.get("/computers/:id", ComputeController.getOneComputer);
    app.delete("/computers/:id", ComputeController.deleteComputer);
    app.put("/computers/:id/edit", ComputeController.updateComputer);
}