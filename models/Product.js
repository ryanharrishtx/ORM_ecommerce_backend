// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, // Integer data type
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true // Uses auto increment
    },
    product_name: {
      type: DataTypes.STRING, // String data type
      allowNull: false // Doesn't allow null values
    },
    price: {
      type: DataTypes.DECIMAL, // Decimal data type
      allowNull: false, // Doesn't allow null values
      validate: {
        isDecimal: true // Checks for decimal
      }
    },
    stock: {
      type: DataTypes.INTEGER, // Integer data type
      allowNull: false, // Doesn't allow null values
      defaultValue: 10, // Set a default value of 10
      validate: {
        isNumeric: true // Checks for numeric values
      }
    },
    category_id: {
      type: DataTypes.INTEGER, // Integer data type
      references: {
        model: 'category', // Links to the Category model
        key: 'id' // Uses the id column from the Category model
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
