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
        default: "Jenny",
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
    //location will containe an object with full address, latitude, longitude, zip code
    location: {
        type: Array,
        default: [{fullAddress: "123 main st, los angeles, ca 91113", zipCode: 91113, latitude: null, longitude: null}],
        required: [true, 'please enter your location']
    },
    //stories will contain the _ids of stories
    stroies: {
        type: Array,
        default: [],
        required: false
    },
    //balance will contain an object with debt, surplus, and balance (surplus - debt) points
    balance: {
        type: Array,
        default: [{debt: 3, surplus: 5, balance: 2}],
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