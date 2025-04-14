// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/db");

import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

// const bcrypt = require("bcryptjs");
import bcrypt from 'bcryptjs';

export const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "users",
  timestamps: false,
});

// Password hashing hook
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

// Password validation method
User.prototype.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


