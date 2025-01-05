import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import { useGlobalContext } from "../../Context/GlobalContext";
import IncomeItem from "../IncomeItem/IncomeItem";
import { rupees } from "../../Utils/Icons";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  const { addExpense, expenses, getExpenses, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          <i class="wallet fa-solid fa-money-bill-transfer"></i> Total Expense:{" "}
          <span>
            {rupees}
            {totalExpense()}
          </span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor="#DC4C64"
                  type={type}
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
};

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    .wallet {
      transform: translate(-11.5cm);
      font-size: 2.5rem;
      color: #dc4c64;
    }
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: #dc4c64;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;
