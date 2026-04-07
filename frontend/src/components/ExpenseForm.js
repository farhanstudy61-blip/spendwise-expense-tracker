import { useState } from "react";
import { addExpense } from "../api/expenseApi";

function ExpenseForm({ refreshExpenses }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addExpense({
      title: title,
      amount: parseFloat(amount),
      category: category
    });

    setTitle("");
    setAmount("");
    setCategory("");

    refreshExpenses();
  };

  return (
    <div>

      <h3>Add Expense</h3>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category (Food, Travel etc)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit">Add</button>

      </form>

    </div>
  );
}

export default ExpenseForm;