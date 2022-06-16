const express = require('express');
const controllers = require('../controllers/users');
const validate = require('../middleware/validations')

const router = express.Router();

router.post('/users/login', validate.validateUser, controllers.postLogin);
router.post('/users/sign-up', validate.validateUser,controllers.postSignUp);

module.exports = router;