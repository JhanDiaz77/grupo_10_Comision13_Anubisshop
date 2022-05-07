const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const upload = require('../middlewares/uploadAvatar');
const registerValidator = require('../validations/registerValidator')

router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/registro', upload.single('avatar'), registerValidator, userController.processRegister)



module.exports = router;
