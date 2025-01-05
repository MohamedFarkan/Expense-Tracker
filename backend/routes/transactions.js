const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncomes,
} = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-incomes", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncomes)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
