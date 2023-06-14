const { Router } = require('express');
const { getPosts } = require('../controllers/post.js');
const router = Router();

router.get('/', getPosts);
module.exports = router;