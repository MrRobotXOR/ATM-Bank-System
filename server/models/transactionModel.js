import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  type: {
    type: DataTypes.ENUM("deposit", "withdraw", "transfer"),
    allowNull: false,
  },

  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  fromAccount: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  toAccount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Transaction;