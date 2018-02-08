'use stricct';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const storySchema = mongoose.Schema({

	title: {
        type: String,
        min: [3, 'Too few Characters'],
        required: [true, "Please enter a title"]
    },
    dateWanted: {
        type: Date,
        required: [true, "Please specify a date"]
    },
    //we keep the lociton in story so we can eaily find them based on location
    location: {
        type: Array,
        default: [{fullAddress: "123 main st, los angeles, ca 91113", zipCode: 91113, latitude: null, longitude: null}],
        required: [true, 'please enter your location']
    },
    typeOfService: {
        type: String,
        min: [2, "Too few Characters"],
        default : "Other",
        required: [true, "please enter a type"]
    },
    content: {
        type: String,
        min: [10, "Too few Characters"],
        required: [true, "Please enter your story"]
    },
    pictureURL: {
        type: String,
        min: [3, "Please enter the url to the picture"],
        required: false
    },
    progress: {
        type: Number,
        min: [0, "too few Characters"],
        default: 1,
        required: [true, "Please give the percentage"]
    }

});

module.exports = mongoose.model('storySchema', storySchema);