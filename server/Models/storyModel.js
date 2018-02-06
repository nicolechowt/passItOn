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
    typeOfService: {
        type: String,
        min: [2, "Too few Characters"],
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
        min: [1, "too few Characters"],
        default: 0,
        required: [true, "Please give the percentage"]
    }

});

module.exports = mongoose.model('storySchema', storySchema);