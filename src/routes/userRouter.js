const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const upload = require('../middlewares/uploadAvatar')

router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/registro', upload.single('avatar'), userController.processRegister)



module.exports = router;
