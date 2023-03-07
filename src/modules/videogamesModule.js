const {
  videogamesService,
  detailGameService,
} = require("../services/videogamesService");
const {
  videogameHandler,
  detailGameHandler,
  deleteVideogameHandler,
  updateVideogameHandler,
  videogamesDB
} = require("../handlers/videogameHandler");

const videogamesModule = async (name) => {
  try {
    const videogamesFromDB = await videogamesDB();
    let videogames = await videogamesService();
    videogames = videogames.results;
    const concatVideogames = videogames.concat(videogamesFromDB)
    const allVideogames = concatVideogames.map((v) => {
      return {
        id: v.id,
        name: v.name,
        image: v.background_image || v.image,
        rating: v.rating,
        released: v.released,
      };
    });
    if(name) {
      const searchVideogame = allVideogames.filter(n => {
      return n.name.includes(name)})
      return searchVideogame;
    }
    return allVideogames;
  } catch (error) {
    throw error;
  }
};

const detailGameModule = async (id) => {
  try {
    if (id.includes("-")) {
      let detailGameFromDB = await detailGameHandler(id);
      return detailGameFromDB;
    }

    let detailGame = await detailGameService(id);

    const platforms = detailGame.platforms.map((p) => {
      return {
        id: p.platform.id,
        name: p.platform.name,
        image: p.platform.image_background,
        requirements: {
          minimum: p.requirements.minimum || "",
          recommended: p.requirements.recommended || "",
        },
      };
    });

    const ratings = detailGame.ratings.map((r) => {
      return {
        title: r.title,
        percent: r.percent,
        count: r.count,
      };
    });

    const detailGameFormatted = {
      id: detailGame.id,
      name: detailGame.name,
      description: detailGame.description,
      image: detailGame.background_image,
      platforms: platforms,
      released: detailGame.released,
      rating: detailGame.rating,
      ratings: ratings,
    };
    return detailGameFormatted;
  } catch (error) {
    throw error;
  }
};

const saveVideogameModule = async (videogame) => {
  try {
    return await videogameHandler(videogame);
  } catch (error) {
    throw error;
  }
};

const deleteVideogameModule = async (id) => {
  try {
    return await deleteVideogameHandler(id);
  } catch (error) {
    throw error;
  }
};

const updateVideogameModule = async (id, body) => {
  try {
    return await updateVideogameHandler(id, body);
  } catch (error) {
    throw(error)
  }
}

module.exports = {
  videogamesModule,
  detailGameModule,
  saveVideogameModule,
  deleteVideogameModule,
  updateVideogameModule,
};
