const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET Image List
router.get('/image_list', indexController.image_list_get);

// GET Selected game image
router.get('/:gameImageId', indexController.game_image_get);

// PUT Update curent game data
router.put('/:gameImageId', indexController.game_image_put);

// POST Check selected game image for coordinate match
router.post('/:gameImageId', indexController.game_image_post);

module.exports = router;
