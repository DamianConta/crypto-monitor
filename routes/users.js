const express = require('express');
const controllers = require('../controllers/users');

const router = express.Router();

router.post('/users/login', controllers.postLogin);
router.post('/users/sign-up', controllers.postSignUp);

module.exports = router;