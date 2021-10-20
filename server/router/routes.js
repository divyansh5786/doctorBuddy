const express = require('express');
const router = express.Router();
require('../db/conn');
const mongoose = require('mongoose');
const path = require('path');
const Authenticate = require('../middleware/auth');

userSignup = require("../controller/userSignup");
userLogin = require("../controller/userLogin")
userProfile= require("../controller/userProfile")

router.get('/', (req, res) => {
  
    res.send('hello');
});

router.post('/register', userSignup.register);
router.post('/login', userLogin.LogIn);
router.get('/profile',Authenticate,userProfile.profile)


module.exports = router;