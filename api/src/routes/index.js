const { Router } = require('express');
const { body } = require('express-validator');
const { getGamesWithPagination, getGames, getGamesById, getGamesByName, postGames, deleteGame } = require('../controllers/games.js');
const { getPosts } = require('../controllers/post.js');
const { getUsersWithPagination, getAllUsers, getUserById, getUserByName, getUserByEmail, createUser, updateUser, deleteUser} = require('../controllers/users.js');

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

router.get('/games/page', getGamesWithPagination); // Ruta para obtener juegos con paginación y filtros

router.get('/Posts', getPosts);

// Endpoint para obtener todos los usuarios
router.get('/users/', getAllUsers);

// Endpoint para obtener un usuario por id
router.get('/users/:id', getUserById);

// Endpoint para obtener un usuario por nombre
router.get('/users/:name', getUserByName);       

// Endpoint para obtener un usuario por email
router.get('/users/email/:email', getUserByEmail);
// Endpoint para crear un usuario
router.post(
    '/users',
    [
      body('email').isEmail().withMessage('Invalid email'),
      body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])/)
        .withMessage('Password must contain special characters and uppercase letters'),
    ],
    createUser
  );

// Endpoint para actualizar un usuario
router.put('/users/:id', updateUser);

// Endpoint para eliminar un usuario
router.delete('/users/:id', deleteUser);

// Endpoint para obtener usuarios con paginación y filtros
router.get('/users/page/:page', getUsersWithPagination); // Ruta para obtener usuarios con paginación y filtros

module.exports = router;