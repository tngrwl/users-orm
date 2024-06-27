// src/models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password : {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,  // Add createdAt and updatedAt timestamps
  tableName: 'users', // Optional: Specify the table name explicitly
});

module.exports = User;
