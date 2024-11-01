const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET Image List
router.get('/', indexController.image_list_get);

module.exports = router;
