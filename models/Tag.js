const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER, // Integer data type
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true // Uses auto increment
    },
    tag_name: {
      type: DataTypes.STRING // String data type
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
