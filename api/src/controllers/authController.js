require('dotenv').config();
const hash = require("../utils/bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../db.js");
const { where } = require("sequelize");
const {CHAT_ENGINE_PRIVATE_KEY, CHAT_ENGINE_PROJECT_ID, SECRET_KEY } = process.env
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user_Db = await User.findOne({ where: { email: email } });

    if (!user_Db) {
      return res.status(404).json({ message: "Email or password is invalid" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user_Db.password);

    if (!isPasswordMatch) {
      return res.status(404).json({ message: "Email or Password are invalid" });
    }

    const token = jwt.sign(user_Db.dataValues, SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    const respuesta = {
      id: user_Db.id,
      name: user_Db.name,
      email: user_Db.email,
      createdAt: user_Db.createdAt,
      perfilUrl: user_Db.perfilUrl,
      image: user_Db.image,
      description: user_Db.description,
      isAdmin: user_Db.isAdmin,
      isPremium: user_Db.isPremium,
      token,
    };
    console.log(respuesta);
    return res.json(respuesta);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": user_Db.name,
        "User-Secret": password,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
};

const handleSignUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await hash.hashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    const respuesta = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
      perfilUrl: newUser.perfilUrl,
      image: newUser.image,
      description: newUser.description,
    };

    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { name, password, email},
      { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
};

module.exports = { handleLogin, handleSignUp };
