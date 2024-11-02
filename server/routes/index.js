const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET Image List
router.get('/image_list', indexController.image_list_get);

// GET Selected game image
router.get('/:gameImageId', indexController.game_image_get);

module.exports = router;
