const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.indexController_get);

/* GET new page */
router.get('/new', mainController.newController_get);

router.post('/new', mainController.newController_post);

module.exports = router;
