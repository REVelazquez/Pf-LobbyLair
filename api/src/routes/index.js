const { Router } = require('express');
const { getGames, getGamesById, getGamesByName, postGames, deleteGame } = require('../controllers/games.js');
const { getPosts } = require('../controllers/post.js');
const { getAllUsers, getUserById, getUserByName, createUser, updateUser, deleteUser} = require('../controllers/users.js');

const router = Router();

// Endpoint para obtener todos los games
router.get('/Games', getGames);

// Endpoint para eliminar un game
router.delete('/Games/:id', deleteGame);

// Endpoint para obtener un game por id
router.get('/Games/:id', getGamesById);

// Endpoint para obtener un usuario por game
router.get('/games/name/:name', getGamesByName);

// Endpoint para crear un game
router.post('/Games', postGames);

router.get('/Posts', getPosts);

// Endpoint para obtener todos los usuarios
router.get('/users/', getAllUsers);

// Endpoint para obtener un usuario por id
router.get('/users/:id', getUserById);

// Endpoint para obtener un usuario por nombre
router.get('/users/:name', getUserByName);       

// Endpoint para crear un usuario
router.post('/users/', createUser);

// Endpoint para actualizar un usuario
router.put('/users/:id', updateUser);

// Endpoint para eliminar un usuario
router.delete('/users/:id', deleteUser);
module.exports = router;
