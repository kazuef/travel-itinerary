const { DataTypes } = require('sequelize');
const sequelize = require("../config/db");

const ScheduleList = sequelize.define('ScheduleList', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    schedule_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    schedule_title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    schedule_description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    paranoid: true,
    tableName: 'schedule_list'
});

// Itineraryとのリレーション
Itinerary.hasMany(ScheduleList);
ScheduleList.belongsTo(Itinerary);

module.exports = ScheduleList;