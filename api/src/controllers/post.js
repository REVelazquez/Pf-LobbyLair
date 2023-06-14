const { Post } = require('../db.js');

async function getPosts (rea, res){
  return res.status(200).json("a");
}

async function createPost (req, res){
  const { text, game_id, user_id, date } = req.body;
  const post = await Post.create({
    text,
    game_id,
    user_id
  });
  return res.status(201).json(post);
}


module.exports = {
  getPosts
};