const { DataTypes } = require('sequelize');
const sequelize = require("../config/db");

const Itinerary = sequelize.define('Itinerary', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });

  module.exports = Itinerary;