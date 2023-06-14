const { Router } = require('express');
const { body } = require('express-validator');
const { getGames, getGamesById, getGamesByName, postGames, deleteGame } = require('../controllers/games.js');
const { getPosts } = require('../controllers/post.js');
const { getAllUsers, getUserById, getUserByName, createUser, updateUser, deleteUser} = require('../controllers/users.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/Games', getGames);
router.get('/Games/:id', getGamesById);
router.get('/Posts', getPosts);
// Endpoint para obtener todos los usuarios
router.get('/users/', getAllUsers);

// Endpoint para obtener un usuario por id
router.get('/users/:id', getUserById);

// Endpoint para obtener un usuario por nombre
router.get('/users/:name', getUserByName);       

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
module.exports = router;
