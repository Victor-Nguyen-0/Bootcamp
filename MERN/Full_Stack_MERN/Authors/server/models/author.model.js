const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "An author is required!!!"],
        minlength: [3, "The author's name must be at least 3 characters!"],
        maxLength: [30, "The author's name can be no more than 30 characters!"]
    }
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;