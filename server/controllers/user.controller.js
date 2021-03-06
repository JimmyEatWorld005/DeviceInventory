const { req, res } = require('express');
const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const secret = jwt.sign({ User }, process.env.FIRST_SECRET_KEY);



module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.FIRST_SECRET_KEY);
    
                res
                    .cookie("usertoken", userToken, secret, {
                        httpOnly: true
                    })
                    .json({ msg: "usertoken success!", user: user });
            })
            .catch(err => res.json(err));
    },
    
    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
    
        if(user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }
    
        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
    
        if(!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }
    
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.FIRST_SECRET_KEY);
    
        // note that the response object allows chained calls to cookie and json
        res.cookie("usertoken", userToken, secret, { httpOnly: true }).json({
            msg: "usertoken success!"
        });
    },
    
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
}
    
    

