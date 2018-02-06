'use stricct';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({

	email: {
        type: String,
        min: [3, 'Please enter an email in the correct format'],
        required: [true, 'Please enter an email']
    },
    password: {
        type: String,
        min: [8, 'Your password must be at least 8 characters large'],
        required: [true, "Please enter a pssword"]
    },
    firstName: {
        type: String,
        min: [2, 'too few characters'],
        required: [true, 'Please enter a name']
    },
    lastName: {
        type: String,
        min: [2, 'too few characters'],
        required: false
    },
    profilePictureURL: {
        type: String,
        min: [3, 'too few characters'],
        required: false
    },
    backgroundPictureURL: {
        type: String,
        min: [3, 'too few characters'],
        required: false
    },
    userInterest: {
        type: Array,
        default: [],
        required: false
    },
    location: {
        type: String,
        min: [2, 'too few characters'],
        required: [true, 'please enter your location']
    },
    stroies: {
        type: Array,
        default: [],
        required: false
    },
    //balance will contain an object with debt, surplus, and balance (surplus - debt) points
    balance: {
        type: Array,
        default: [],
        required: false
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('userModel', userSchema);