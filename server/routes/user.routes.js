const UserController = require('../controllers/user.controller');

// const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post("/user/register/", UserController.register);
    app.post("/user/login/", UserController.login);
    app.post("/user/logout/", UserController.logout);
    // this route now has to be authenticated
    // app.get("/user/users", authenticate, UserController.getAll);
}