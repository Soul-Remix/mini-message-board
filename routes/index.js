const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.indexController_get);

module.exports = router;
