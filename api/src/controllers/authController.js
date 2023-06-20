const hash = require('../utils/bcrypt');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db.js');
const { where } = require('sequelize');

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      
      const user_Db = await User.findOne({where:{email: email}});

      if (!user_Db) return res.status(404).json({ message: 'Email does not exist' });
      
      const isPasswordMatch = await bcrypt.compare(password, user_Db.password);

      if (!isPasswordMatch) return res.status(401).json({ message: 'Invalid password' });
  
      const token = jwt.sign(user_Db.dataValues, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 7,
      })
      console.log(token);
    res.json(user_Db);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const handleSignUp = async (req, res) => {
    const { email, password, name } = req.body;
    console.log(email, password, name);
    try {
      const existingUser = await User.findOne({where:{email: email}});

      if (existingUser) return res.status(400).json({ message: 'Email already exists' });
  
      const hashedPassword = await hash.hashPassword(password);
  
      const newUser = new User({
        email,
        password: hashedPassword,
        name,
      });
      
      await newUser.save();
      const token = jwt.sign(newUser, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 7, 
      })

    res.json( newUser );
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = { handleLogin,handleSignUp };
