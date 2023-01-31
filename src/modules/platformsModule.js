"use strict";
const { platformsService } = require("../services/platformsService");

const platformsModule = async () => {
  try {
    const platforms = await platformsService();
    const platformsList = platforms.map((p) => {
      let gamesOfPlatforms = p.games.map((pg) => {
        return {
          id: pg.id,
          name: pg.name,
        };
      });
      return {
        id: p.id,
        name: p.name,
        gamesCount: p.games_count,
        image: p.image_background,
        games: gamesOfPlatforms,
      };
    });
    return platformsList;
  } catch (error) {
    throw error;
  }
};

module.exports = { platformsModule };
