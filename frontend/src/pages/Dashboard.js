import { useEffect, useState } from "react";
import { getExpenses } from "../api/expenseApi";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

return (
  <div className="dashboard">

    <h1>SpendWise Tracker</h1>
    <h2>Total Spending: ₹ {total}</h2>

    <ExpenseForm refreshExpenses={loadExpenses} />

    <div className="dashboard-row">

      <div className="chart-section">
        <ExpenseChart expenses={expenses} />
      </div>

      <div className="expense-section">
       {/* <h3>Expense List</h3>*/}

        <ExpenseList
          expenses={expenses}
          refreshExpenses={loadExpenses}
        />

      </div>

    </div>

  </div>
);
}

export default Dashboard;