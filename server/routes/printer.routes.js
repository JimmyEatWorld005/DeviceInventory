const PrinterController = require('../controllers/printer.controller');

module.exports = (app) => {
    app.get("/printers", PrinterController.getAllPrinters);
    app.post("/printers/new/", PrinterController.createPrinter);
    app.get("/printers/:id", PrinterController.getOnePrinter);
    app.delete("/printers/:id", PrinterController.deletePrinter);
    app.put("/printers/:id/edit", PrinterController.updatePrinter);
}