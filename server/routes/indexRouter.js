const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// GET Image List
router.get('/image_list', indexController.image_list_get);

// GET Leader List
router.get('/leader_list/:imageId', indexController.leader_list_get);

// DELETE Quit game
router.delete('/quit_game', indexController.quit_game_delete);

// GET End game
router.get('/end_game', indexController.end_game_get);

// POST Check selected game image for coordinate match
router.post('/check_selection', indexController.check_selection);

// GET Selected game image
router.get('/:gameImageId', indexController.game_image_get);

// POST Start game with selected game image
router.post('/:gameImageId', indexController.game_image_post);

module.exports = router;
