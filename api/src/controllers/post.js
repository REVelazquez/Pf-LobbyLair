const { Post, Game, User } = require('../db.js');




async function getPosts(req, res) {
  try {
    let posts = await Post.findAll({
      include: {
        model: User,
        attributes: ['id'],
      },
    });

    return res.status(200).json(posts);
  } catch (error) {
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
    const { text, date, userid, gameid, gamemodeid } = req.body;
    try {
      let newPost = await Post.create({
        text: text,
        date: date,
      });
  
      let game = await Game.findByPk(gameid);
      if (!game) {
        return res.status(404).json({ error: 'El juego no existe' });
      }
  
      await newPost.setGame(game);
  
      let gameMode = await GameMode.findByPk(gamemodeid);
      if (!gameMode) {
        return res.status(404).json({ error: 'El modo de juego no existe' });
      }
  
      await newPost.setGameModes([gameMode]);
  
      let user = await User.findByPk(userid);
      if (!user) {
        return res.status(404).json({ error: 'El usuario no existe' });
      }
  
      await newPost.setUser(user);
  
      return res.status(200).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async function deletePost(req, res) {
    const postId = req.params.id; // Obtener el ID del post desde los parámetros de la solicitud
  
    try {
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'El post no existe' });
      }
  
      await post.setGames([]); 
      await post.setUser(null);
  
      await post.destroy(); 
      return res.status(200).json({ message: 'Post eliminado exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }










module.exports = {
  getPosts,
  getPostsbyUser,
  createPost,
  deletePost


};