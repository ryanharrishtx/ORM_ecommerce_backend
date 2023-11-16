const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, // Integer data type
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true // Uses auto increment
    },
    product_id: {
      type: DataTypes.INTEGER, // Integer data type
      references: {
        model: 'product', // Links to the Product model
        key: 'id' // Uses the id column from the Product model
      }
    },
    tag_id: {
      type: DataTypes.INTEGER, // Integer data type
      references: {
        model: 'tag', // Links to the Tag model
        key: 'id' // Uses the id column from the Tag model
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
