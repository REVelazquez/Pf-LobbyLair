const { Router } = require('express');
const { getGames } = require('../controllers/games.js');
const router = Router();

router.get('/', getGames);
module.exports = router;