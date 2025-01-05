import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../Context/GlobalContext";

const TransactionHistory = () => {
  const { incomes, expenses } = useGlobalContext();

  const transactionHistory2 = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history;
  };

  const [...history] = transactionHistory2();

  return (
    <TransactionHistoryStyled>
      <h2>Transaction History</h2>
      {history.map((item) => {
        const { _id, title, amount, date, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === "expense" ? "#DC4C64" : "#14A44D",
              }}>
              {title}
            </p>
            <p
              style={{
                color: type === "expense" ? "#DC4C64" : "#14A44D",
              }}>
              {type === "expense" ? `-${amount}` : `+${amount}`}
            </p>
          </div>
        );
      })}
    </TransactionHistoryStyled>
  );
};

const TransactionHistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    margin-top: 20px;
    margin-left: 20px;
  }
  .history-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 1rem;
    width: 45%;
    transform: translate(300px);
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export default TransactionHistory;
