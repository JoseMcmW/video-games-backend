const { videogamesService, detailGameService } = require("../services/videogamesService");
const { videogameHandler } = require("../handlers/videogameHandler");

const videogamesModule = async () => {
  try {
    const videogames = await videogamesService();
    const allVideogames = videogames.results.map(v => {
      return {
        id: v.id,
        name: v.name,
        image: v.background_image,
        rating: v.rating,
        released: v.released
      };
    });
    return allVideogames;
  } catch (error) {
    throw error;
  }
}

const detailGameModule = async (id) => {
  try {
    const detailGame = await detailGameService(id);

    const platforms = detailGame.platforms.map(p => {
      return {
        id: p.platform.id,
        name: p.platform.name,
        image: p.platform.image_background,
        requirements: {
          minimum: p.requirements.minimum || "",
          recommended: p.requirements.recommended || "",
        }
      }
    })

    const ratings = detailGame.ratings.map(r => {
      return {
        title: r.title,
        percent: r.percent,
        count: r.count,
      }
    })

    const detailGameFormatted = {
      id: detailGame.id,
      name: detailGame.name,
      description: detailGame.description,
      image: detailGame.background_image,
      platforms: platforms,
      released: detailGame.released,
      rating: detailGame.rating,
      ratings: ratings,
    }
    return detailGameFormatted;
  } catch (error) {
    throw error;
  }
}

const saveVideogameModule = async (videogame) => {
  try {
    return await videogameHandler(videogame);
  } catch (error) {
    throw error;
  }
}

module.exports = { videogamesModule, detailGameModule, saveVideogameModule }