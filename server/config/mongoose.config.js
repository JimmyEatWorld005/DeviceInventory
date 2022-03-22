const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/devdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to devdb"))
    .catch(err => console.log("Something went wrong when connecting to devdb", err));