const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const upload = require('../middlewares/uploadAvatar');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');


router.get('/login', userController.login);
router.post('/login', loginValidator, userController.processLogin);

router.get('/register', userController.register);
router.post('/register', upload.single('avatar'), registerValidator, userController.processRegister)



module.exports = router;
