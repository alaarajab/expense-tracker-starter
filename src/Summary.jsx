import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = {
  expenses: "#e53935",
  balance: "#4caf50",
};

function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const pieData = [
    { name: "Expenses", value: totalExpenses },
    { name: "Balance", value: balance },
  ];

  const renderLabel = ({ name, value }) => `$${value.toLocaleString()}`;

  return (
    <div className="summary-section">
      <div className="summary">
        <div className="summary-card">
          <h3>Income</h3>
          <p className="income-amount">${totalIncome.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Expenses</h3>
          <p className="expense-amount">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="summary-card">
          <h3>Balance</h3>
          <p className="balance-amount">${balance.toLocaleString()}</p>
        </div>
      </div>

      {totalIncome > 0 && (
        <div className="chart-container">
          <h3 className="chart-title">Income Breakdown</h3>
          <PieChart width={380} height={260}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={renderLabel}
              labelLine={true}
            >
              <Cell key="expenses" fill={COLORS.expenses} />
              <Cell key="balance" fill={COLORS.balance} />
            </Pie>
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
          </PieChart>
        </div>
      )}
    </div>
  );
}

export default Summary;
