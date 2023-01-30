"use strict";

const { genresService, detailsGenreService } = require("../services/genresService");

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

const detailsGenreModule = async (id) => {
  try {
    const detailsGenre = await detailsGenreService(id);
    const detailsGenreResponse = {
      id: detailsGenre.id,
      name: detailsGenre.name,
      games: detailsGenre.games_count,
      image: detailsGenre.image_background,
      description: detailsGenre.description,
    };
    return detailsGenreResponse;
  } catch (error) {
    throw error;
  }
};

module.exports = { genresModule, detailsGenreModule };
