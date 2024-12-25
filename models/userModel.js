const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    // id
    // firstname, lastname, address, city, state,email, password
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

});

models.export = mongoose.model("user" , userSchema);