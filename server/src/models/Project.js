import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Project = sequelize.define(
  "Project",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active", // default status
    },
  },
  {
    tableName: "projects",
    timestamps: true, // adds createdAt and updatedAt
  }
);
