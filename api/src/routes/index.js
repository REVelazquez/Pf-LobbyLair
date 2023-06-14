const { Router } = require('express');
const { getGames, getGamesById, getGamesByName, postGames, deleteGame } = require('../controllers/games.js');
const { getPosts } = require('../controllers/post.js');
const { getUsers } = require('../controllers/users.js');

const router = Router();

router.get('/Games', getGames);
router.delete('/Games/:id', deleteGame);
router.get('/Games/:id', getGamesById);
router.get('/games/name/:name', getGamesByName);
router.post('/Games', postGames);
router.get('/Posts', getPosts);
router.get('/Users', getUsers);

module.exports = router;
