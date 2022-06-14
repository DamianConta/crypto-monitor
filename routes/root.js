const express = require('express');
const root = require('../controllers/root')

const router = express.Router();

router.get('/', root.indice)

module.exports = router;