const express = require("express")
const { registerUser,login,updateUser,deleteUser} = require('../controllers/user.controller.js')
const {validateUserRegistration ,validateLogin} = require('../validators/user.validator.js')
const authenticate = require('../middleware/auth.middleware')
const router = express.Router()

router.post('/register', validateUserRegistration, registerUser)
router.post('/login',validateLogin,login)
router.put('/update/:userId', authenticate, updateUser)
router.delete('/delete/:userId', authenticate,deleteUser)

module.exports = router;
