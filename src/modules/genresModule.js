"use strict"

const { genresService } = require("../services/genresService");

const genresModule = async () => {
  try {
    const genres = await genresService();
    const allGenres = genres.map((g) => {
      const games = g.games.map((game) => {
        return {
          id: game.id,
          name: game.name,
        };
      });
      return {
        id: g.id,
        name: g.name,
        gamesCount: g.games_count,
        image: g.image_background,
        games: games,
      };
    });
    return allGenres;
  } catch (error) {
    throw error;
  }
};

module.exports = { genresModule };
