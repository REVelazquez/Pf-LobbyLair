const { Post, Game, User, GameMode } = require('../db.js');

async function getPosts(req, res) {
  try {
    let posts = await Post.findAll({
      include: [
        { model: User, attributes: ['id'] },
        { model: Game, attributes: ['id', 'name', 'thumbnail'] },
        { model: GameMode, attributes: ['id', 'name'] }
      ]
    });

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getPostsByUserId(req, res) {
  const userId = req.params.userid;

  try {
    let posts = await Post.findAll({
      where: { userId: userId }, 
      include: [
        { model: User, attributes: ['id', 'name'] },
        { model: Game, attributes: ['id', 'name', 'thumbnail'] },
        { model: GameMode, attributes: ['id', 'name'] }
      ]
    });

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

  async function createPost(req, res) {
    const { text, userid, gameid, gamemodeid } = req.body;
    try {
      let newPost = await Post.create({
        text: text,
        date: new Date(),
      });
  
      let game = await Game.findByPk(gameid);  
      if (!game) {
        return res.status(404).json({ error: 'El juego no existe' });
      }
  
      let gameMode = await GameMode.findByPk(gamemodeid);
     
  
      if (!gameMode) {
        return res.status(404).json({ error: 'El modo de juego no existe' });
      }
  
      await newPost.setUser(userid);
      await newPost.setGame(gameid)
      await newPost.setGameMode(gamemodeid);
  
      return res.status(200).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async function deletePost(req, res) {
    const { id } = req.params; 
    console.log(id);
    try {
      const post = await Post.findOne({ where: { id: id } })
      if (!post) {
        return res.status(404).json({ error: 'El post no existe' });
      }
      await post.setGame([]); 
      await post.setUser(null); 
      await post.setGameMode(null); 
  

      await post.destroy(); 
  
      return res.status(200).json({ message: 'Post eliminado exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }









module.exports = {
  getPosts,
  getPostsByUserId,
  createPost,
  deletePost


};