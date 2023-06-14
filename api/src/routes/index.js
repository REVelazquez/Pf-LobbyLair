const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Games = require('./Game.js');
const User = require('./User.js');
const Post = require('./Post.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/Games', Games);
router.use('/Users', User);
router.use('/Posts', Post);

module.exports = router;