const express = require('express');
const router = express.Router();
const userController = require('../app/user/controllers/user_controller');
router.get('/login', userController.login);

module.exports = router;