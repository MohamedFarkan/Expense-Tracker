import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layouts";
import ChartComponent from "../Chart/ChartComponent";
import { rupees3, rupees4 } from "../../Utils/Icons";
import { useGlobalContext } from "../../Context/GlobalContext";
import History from "../../History/History";
//import Income from "../Incomes/Income";

const Dashboard = () => {
  const {
    incomes,
    expenses,
    totalExpense,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <ChartComponent />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {rupees3}
                  {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {rupees3}
                  {totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {rupees4}
                  {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Income</span>Max
            </h2>
            <div className="salary-item">
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>

              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>

              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1/4;
      height: 380px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income {
          color: var(--color-green);
        }
        .expense {
          color: #dc4c64;
        }
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 3.5rem;
            font-weight: 700;
          }
        }
        .balance {
          grid-column: 2/4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: #14a44d;
            opacity: 0.6;
            font-size: 4.5rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4/-1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        padding: 1rem;
        p {
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }
  }
`;

export default Dashboard;