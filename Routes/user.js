const express = require("express");
const router = express.Router();
// importing Controller
const userController = require("../controller/userController")

/**
 *@author: Rajnish Kumar
 *@route POST /<version>/api/user/register
 *@desc Public API for register user
 *@access Public
 **/
router.post("/register", userController.registerUser)

/**
 *@author: Rajnish Kumar
 *@route POST /<version>/api/user/login
 *@desc Public API for login
 *@access Public
 **/
router.post("/login", userController.loginUser)

module.exports = router;