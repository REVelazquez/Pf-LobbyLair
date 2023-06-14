const { Game, GameMode, Genre } = require('../db.js');
const allGames = require('../../dataGames.js');

async function getGames(req, res) {
  try {
    let games = await Game.findAll({
      include: [GameMode, Genre], 
    });

    if (games.length === 0) {
      for (const game of allGames) {
        const createdGame = await Game.create({
          name: game.name,
          thumbnail: game.thumbnail,
        });
        const gameModes = game.gameMode;
        const genres = game.genres;

        for (const gameMode of gameModes) {
          const [createdGameMode] = await GameMode.findOrCreate({
            where: { name: gameMode },
          });
          await createdGame.addGameMode(createdGameMode);
        }

        for (const genre of genres) {
          const [createdGenre] = await Genre.findOrCreate({
            where: { name: genre },
          });
          await createdGame.addGenre(createdGenre);
        }
      }

      games = await Game.findAll({
        include: [GameMode, Genre], // Incluir los GameMode y Genre asociados
      });

      return res.status(200).json(games);
    }

    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getGamesById(req, res) {
  const { id } = req.params;
  try {
    const game = await Game.findByPk(id, {
      include: [GameMode, Genre],
    });
    if (game) {
      return res.status(200).json(game);
    }
    return res.status(404).json({ error: 'Game not found' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getGamesByName(req, res) {
  const { name } = req.params;
  try {
    const game = await Game.findOne({
      where: { name: name },
      include: [GameMode, Genre],
    });
    if (game) {
      return res.status(200).json(game);
    }
    return res.status(404).json({ error: 'Game not found' });
  } catch (error) {
    return res.status(500).json({ error: error.message });    
  } 
}

module.exports = {
  getGames,
  getGamesById,
  getGamesByName,
};
