const { Router } = require('express');
const userController = require('../controllers/userContoller')
 
const router = Router();
// Endpoint para obtener todos los usuarios
router.get('/users/', userController.getAllUsers);

// Endpoint para obtener un usuario por id
router.get('/users/:id', userController.getUserById);

// Endpoint para obtener un usuario por nombre
router.get('/users/:name', userController.getUserByName);       

// Endpoint para crear un usuario
router.post('/users/', userController.createUser);

// Endpoint para actualizar un usuario
router.put('/users/:id', userController.updateUser);

// Endpoint para eliminar un usuario
router.delete('/users/:id', userController.deleteUser);


module.exports = router;