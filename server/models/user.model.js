const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


// const userToken = jwt.sign(payload, process.env.FIRST_SECRET_KEY);

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"],
    },
  }, {
        timestamps: true,
        collection: 'users',
    }
);

UserSchema.virtual('confirmPassword')
        .get( () => this._confirmPassword )
        .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});


UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

UserSchema.method.generateAuthToken = function() {
    const token = jwt.sign({ _id:this._id }, process.env.FIRST_SECRET_KEY)
    return token
};

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

const User = mongoose.model("user", UserSchema);

const payload = {
    id: User._id
};

module.exports = mongoose.model('User', UserSchema);