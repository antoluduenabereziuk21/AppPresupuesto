const Sequelize = require("sequelize");
const { sequelizeConnection } = require("../config/server/sequelizeConfig");

const BudgetModel = sequelizeConnection.define(
  "budget",
  {
    id_budget: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    concept: {
      type: Sequelize.STRING,
      allowNull: false,
      fields: "concept",
    },
    budget_type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      fields: "budget_type",
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
      fields: "amount",
    },
    user_budget: {
      type: Sequelize.INTEGER,
      allowNull: false,
      fields: "user_budget",
    },
    createdAt: {
      type: Sequelize.DATE,
      fields: "createdAt",
    },
    updatedAt: {
      type: Sequelize.DATE,
      fields: "updatedAt",
    },
  },
  {
    tableName: "budget",
    timestamps: true,
  }
);

module.exports = BudgetModel;
