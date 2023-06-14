const { Game, GameMode, Genre } = require('../db.js');
const allGames = require('../../dataGames.js');

async function getGames(req, res) {
  try {
    let games = await Game.findAll();
    console.log(allGames);
    if (games.length === 0) {

      for (const game of allGames) {
        await Game.create({
          name: game.name,
          thumbnail: game.thumbnail,
        });
      }
      games = await Game.findAll();
      return res.status(200).json(games);
    }

    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


module.exports = {
  getGames
};
