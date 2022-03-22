const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



//app
const app = express();

require('./config/mongoose.config');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
require("./routes/user.routes")(app);
require("./routes/compute.routes")(app);
require("./routes/printer.routes")(app);
app.listen(8000, () => {
    console.log("Listening on port 8000");
})

