const axios = require("axios");
const { User, Payment, Subscriptions } = require("../db");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");
const hash = require("../utils/bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Función para obtener todos los usuarios de la base de datos
const getAllUsers = async (req, res) => {
  console.log("a");
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting countries" });
  }
};
// Función para obtener los detalles de un usuario por su ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get user" });
  }
};

// Función para buscar un usuario por su nombre
const getUserByName = async (req, res) => {
  const { name } = req.params;
  try {
    // Se busca el usuario en la base de datos por su nombre
    const user = await User.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%",
        },
      },
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error when searching for the user" });
  }
};
// Función para buscar un usuario por su email
const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  console.log("Email received from params:", email);
  try {
    // Se busca el usuario en la base de datos por su email
    const user = await User.findAll({
      where: {
        email: {
          [Op.iLike]: "%" + email + "%",
        },
      },
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error when searching for the user" });
  }
};

const getAdminUsers = async (req, res) => {
  const { isAdmin } = req.params;
  try {
    const admins = await User.findAll({
      where: {
        isAdmin: true,
      },
    });
    res.status(200).json(admins);
  } catch (error) {
    return res.status(404).json({ message: "Error searching for Admins" });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const allUsers = await User.findAll();
  const userExists = allUsers.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  let new_user = null;
  try {
    new_user = await User.create(
      {
        name: name,
        email: email,
        password: password,
        isAdmin: false,
        perfilUrl: "",
        isPremium: false,
      },
      {
        attributes: { exclude: ["password"] },
      }
    );
    res.json(new_user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    password,
    image,
    description,
    isAdmin,
    isPremium,
    perfilUrl,
  } = req.body;
  const updateFields = {};
  if (name) updateFields.name = name;
  if (email) updateFields.email = email;
  if (password) {
    const hashedPassword = await hash.hashPassword(password);
    updateFields.password = hashedPassword;
  }
  if (image) updateFields.image = image;
  if (description) updateFields.description = description;
  if (isAdmin) updateFields.isAdmin = isAdmin;
  if (isPremium) updateFields.isPremium = isPremium;
  if (perfilUrl) updateFields.perfilUrl = perfilUrl;
  console.log(isAdmin);
  try {
    const user = await User.update(updateFields, {
      where: {
        id: id,
      },
    });
    const updatedUser = await User.findOne({
      where: {
        id: id,
      },
      attributes: { exclude: ["password"] },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating user" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id: id,
      },
      attributes: { exclude: ["password"] },
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting user" });
  }
};
const getUsersWithPagination = async (req, res) => {
  const { page } = req.params;
  const { name, email } = req.query;
  const pageSize = 10;
  try {
    let whereClause = {};
    if (name) {
      whereClause.name = { [Op.iLike]: `%${name}%` };
    }
    if (email) {
      whereClause.email = { [Op.iLike]: `%${email}%` };
    }

    const totalCount = await User.count({ where: whereClause });
    const totalPages = Math.ceil(totalCount / pageSize);

    const users = await User.findAll({
      where: whereClause,
      limit: pageSize,
      offset: (page - 1) * pageSize,
      attributes: { exclude: ["password"] },
    });

    res.json({
      totalCount,
      totalPages,
      currentPage: parseInt(page),
      users,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error getting users with pagination" });
  }
};

const getUserPayments = async (req, res) => {
  const { token } = req.query;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    const user = await User.findByPk(userId, {
      include: Payment,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user.Payments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to get user payments" });
  }
};

const getUserSubscriptions = async (req, res) => {
  const { token } = req.query;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    const user = await User.findByPk(userId, {
      include: Subscriptions,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user.Subscription);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to get user subscriptions" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  getUsersWithPagination,
  getUserPayments,
  getUserSubscriptions,
  getAdminUsers,
};
