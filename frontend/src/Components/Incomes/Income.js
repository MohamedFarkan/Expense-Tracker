import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import { useGlobalContext } from "../../Context/GlobalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import { rupees } from "../../Utils/Icons";

const Income = () => {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          <i class="wallet fa-solid fa-wallet"></i>
          Total Income:{" "}
          <span>
            {rupees}
            {totalIncome()}
          </span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
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
                  indicatorColor="var(--color-green)"
                  type={type}
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
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
      transform: translate(-11.7cm);
      font-size: 2.5rem;
      color: var(--color-green);
    }
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
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

export default Income;
