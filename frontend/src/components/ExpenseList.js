import { deleteExpense } from "../api/expenseApi";

function ExpenseList({ expenses, refreshExpenses }) {

  const handleDelete = async (id) => {
    await deleteExpense(id);
    refreshExpenses();
  };

  // group expenses by category
  const groupedExpenses = {};

  expenses.forEach((expense) => {
    if (!groupedExpenses[expense.category]) {
      groupedExpenses[expense.category] = [];
    }
    groupedExpenses[expense.category].push(expense);
  });

  return (
    <div>

      <h3>Expense List</h3>

      {Object.keys(groupedExpenses).map((category) => (

        <div key={category} style={{ marginBottom: "20px" }}>

          <h4 style={{ textTransform: "uppercase" }}>
            {category}
          </h4>

          {groupedExpenses[category].map((expense, index) => (

            <div key={expense.id} className="expense-item">

              <span className="expense-left">
                {index + 1}. {expense.title}                         ₹   
              </span>

              <span className="expense-right">
                {expense.amount}

                <button
                  onClick={() => handleDelete(expense.id)}
                >
                  Delete
                </button>
              </span>

            </div>

          ))}

        </div>

      ))}

    </div>
  );
}

export default ExpenseList;