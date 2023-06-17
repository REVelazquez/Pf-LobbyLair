const bcrypt = require('../utils/bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Buscar el usuario en la base de datos utilizando el email
      const user_Db = await User.findOne({ email });
  
      if (!user_Db) {
        return res.status(404).json({ message: 'Email does not exist' });
      }
  
      // Verificar si el password coincide utilizando bcrypt.compare()
      const isPasswordMatch = await bcrypt.compare(password, user_Db.password);
  
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Si las credenciales son válidas, genera un token de autenticación
    const token = jwt.sign({ userId: user_Db.id }, 'secret_key');

    // Devuelve una respuesta exitosa con el token
    res.json({ success: true, token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const handleSignUp = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Verificar si el email ya está registrado en la base de datos
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Encriptar el password utilizando bcrypt
      const hashedPassword = await bcrypt.hashPassword(password);
  
      // Crear el nuevo usuario en la base de datos con el password encriptado
      const newUser = new User({
        email,
        password: hashedPassword,
      });
  
      // Guardar el nuevo usuario en la base de datos
      await newUser.save();
  
      // Si las credenciales son válidas, genera un token de autenticación
    const token = jwt.sign({ userId: existingUser.id }, 'secret_key');

    // Devuelve una respuesta exitosa con el token
    res.json({ success: true, token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = { handleLogin,handleSignUp };
