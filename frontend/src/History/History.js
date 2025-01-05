import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/GlobalContext";

const History = () => {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();
  return (
    <HistoryStyled>
      <h2>Recent History</h2>
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
    </HistoryStyled>
  );
};

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 1rem;
  }
`;

export default History;
