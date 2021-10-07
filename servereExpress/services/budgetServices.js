const BudgetModel = require("../models/balanceModel");
const error = require("../common/error");
const exceptions = require("../common/exceptions");

const createTypeProcess = async ({ concept,budget_type, amount, user_budget }) => {
  const data = {
    concept: concept,
    budget_type: JSON.parse(budget_type),
    amount: amount,
    user_budget: user_budget,
    createdAt: new Date(),
    UpdatedAt: new Date(),
  };

  console.log("create Process:" + JSON.stringify(data));
  // console.log(data.recipient_name.user_name)

  // const createOK = await MessageModel.create(data);
  // return create;
  console.log("createProcess - data[" + JSON.stringify(data) + "]");
  try {
    return await BudgetModel.create(data);
  } catch (e) {
    const errorMessage = `Create Process - Detail: ` + e.message;
    console.error(
      "create Process - processType["+ concept + " " +
        budget_type +
        "]for amount[" +
        amount +
        "]"
    );
    throw new error.AppError(
      exceptions.exceptionType.database.entity.canNotBeCreated,
      errorMessage
    );
  }
};

const getAllEntry = async ({user_budget,budget_type}) => {
  const where = {}
  if (user_budget,budget_type) {
    where.user_budget = user_budget;
    where.budget_type= budget_type;
  }
  console.log(where.budget_type);
  const entry = await BudgetModel.findAll({
    attributes: ["id_budget","concept","budget_type","amount","user_budget"],
    where:where,
  });
  return entry;
};

const getAllEgress = async ({user_budget,budget_type}) => {

  const where = {}
  if (user_budget,budget_type) {
    where.user_budget = user_budget;
    where.budget_type= budget_type;
  }
  console.log(where.budget_type);
  const egress = await BudgetModel.findAll({
    attributes: ["id_budget","concept","budget_type","amount","user_budget"],
    where:where,
  });
  return egress;
};

const deleted = async (id_budget) => {
  console.log("Deleted -id: " + id_budget);
  const id_deleted = id_budget;
  const budget = await BudgetModel.destroy({
    where: {
      id_budget: id_deleted,
    },
  });
  if (!budget) {
    throw new error.AppError(exceptions.exceptionType.budget.notFound);
  }

  console.log("deleted return :" + budget);
  return "user deleted :" + budget;
};

module.exports = {
  createTypeProcess,
  getAllEntry,
  getAllEgress,
  deleted,
};
