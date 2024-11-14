const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET Image List
router.get('/image_list', indexController.image_list_get);

// PUT End game
router.put('/quit_game', indexController.quit_game_put);

// GET Selected game image
router.get('/:gameImageId', indexController.game_image_get);

// PUT Start game with selected game image
router.put('/:gameImageId', indexController.game_image_put);

// POST Check selected game image for coordinate match
router.post('/check_selection', indexController.check_selection);

module.exports = router;
