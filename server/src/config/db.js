// const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
// require("dotenv").config();

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres", // 'postgres', 'mysql', 'sqlite', 'mariadb', 'mssql'
    logging: false, // Disable logging; default: console.log
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Postgres connected 🎉");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

// module.exports = { sequelize, connectDB };
