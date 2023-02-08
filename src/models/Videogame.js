const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define("videogame", {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.DATENOW,
        allowNull: false
      },
      image_background: {
        type: DataTypes.STRING,
        allowNull: false
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      rating: {
        type: DataTypes.FLOAT,
        validate: {
          min: 0,
          max: 5
        }
      }
    });
};
