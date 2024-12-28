const express = require('express');

const router = express.Router();

router.post("/register" , (req, res, next) => {
    // find the user
    // if the user exist return a response that says email exist try logging in
    // else encrypt the password
    // set the password with the encrypted password
    // save the user to the database
});

router.post("/login" , (req, res) => {

})

module.exports = router;