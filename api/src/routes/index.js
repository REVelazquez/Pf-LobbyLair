const { Router } = require('express');
const { getGames, getGamesById } = require('../controllers/games.js');
const { getPosts } = require('../controllers/post.js');
const { getUsers } = require('../controllers/users.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/Games', getGames);
// router.get('/Games/:id', getGamesById);
router.get('/Posts', getPosts);
router.get('/Users', getUsers);

module.exports = router;