const express = require('express');
const controllers = require('../controllers/coins');
const jwt = require('../middleware/jwtHandler')

const router = express.Router();

router.get('/list', jwt.requestToken, controllers.getList);
router.post('/wallet/list',jwt.requestToken, controllers.getWallet);
router.post('/savecoin', jwt.requestToken, controllers.postSaveCoin);

module.exports = router;
