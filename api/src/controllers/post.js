const { Post, Game, User } = require('../db.js');

async function getPosts (req, res){
    try {

      let posts = await Post.findAll({
        include: [Game,  User], 
      });

      return res.status(200).json(posts);
      }

     catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async function getPostsbyUser(req, res) {
    const { userId } = req.params;
    try {
      const posts = await Post.findAndCountAll({
        where: {
          userId: userId,
        },
        include: [Game],
      });
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }


  async function createPost(req, res) {
    const {  text, date, userid, gameid } = req.body;
    try {
        let newPost = await Post.create({
        text: text,
        date: date,
      });  
      let gamepost = await Game.findByPk(
        gameid );
      
      if (!gamepost) {
        return res.status(404).json({ error: 'El juego no existe' });
      }
        await newPost.addGames(gamepost);
        let postuser = await User.findByPk(userid);
        if (!postuser) {
        return res.status(404).json({ error: 'El usuario no existe' });
      }
  
      await postuser.addPost(newPost);
  
      return res.status(200).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }












module.exports = {
  getPosts,
  getPostsbyUser,
  createPost


};