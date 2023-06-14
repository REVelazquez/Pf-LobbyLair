const axios = require('axios');
const { User } = require('../db');
const { Op } = require("sequelize");


// Función para obtener todos los usuarios de la base de datos
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error getting countries' });
  }
};
// Función para obtener los detalles de un usuario por su ID
const getUserById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Se busca el usuario en la base de datos por su ID
      const user = await User.findOne({
        where: {
          id: {
            [Op.iLike]: id,
          },
        },
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to get user' });
    }
  };
  
  // Función para buscar un usuario por su nombre
  const getUserByName = async (req, res) => {
    const { name } = req.params;
    console.log("Name received from params:", name);
    try {
      // Se busca el usuario en la base de datos por su nombre
      const user = await User.findAll({
        where: {
          name: {
            [Op.iLike]: '%'+name+'%',
          },
        },
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error when searching for the user' });
    }
  };
  const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    let new_user = null;
    try{
        new_user = await User.create({
          name: name,
          email: email,
          password: password,
          isAdmin: false, // Set a default value for isAdmin
          perfilUrl: '', // Set a default value for perfilUrl
          isPremium: false,
        });
        res.json(new_user);
    } catch (error) {   
        console.error(error);
        return res.status(500).json({ message: 'Error creating user' });
    }
    };
    const updateUser = async (req, res) => {
        const { id } = req.params;
        const { name, email, password } = req.body;
        try{
            await User.update(
                {
                    name: name,
                    email: email,
                    password: password,
                    isAdmin: false, // Set a default value for isAdmin
                    perfilUrl: '', // Set a default value for perfilUrl
                    isPremium: false,
                },
                {
                    where: {
                        id: id,
                    },
                }
            );
            res.json({ message: 'User updated' });
        } catch (error) {   
            console.error(error);
            return res.status(500).json({ message: 'Error updating user' });
        }
    };
    const deleteUser = async (req, res) => {
        const { id } = req.params;
        try{
            await User.destroy({
                where: {
                    id: id,
                },
            });
            res.json({ message: 'User deleted' });
        } catch (error) {   
            console.error(error);
            return res.status(500).json({ message: 'Error deleting user' });
        }
    };

  
module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  createUser,
  updateUser,
  deleteUser
};