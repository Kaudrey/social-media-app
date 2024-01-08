const express = require("express")
const { registerUser,login} = require('../controllers/user.controller.js')
const {validateUserRegistration ,validateLogin} = require('../validators/user.validator.js')
const authenticate = require('../middleware/auth.middleware')
const router = express.Router()

router.post('/register', validateUserRegistration, registerUser)
router.post('/login',validateLogin,login)

module.exports = router;