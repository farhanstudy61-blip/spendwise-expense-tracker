# SpendWise Expense Tracker

SpendWise is a simple full‑stack web application that helps users track their daily expenses.  
Users can add expenses, organize them by category, view the total amount spent, and visualize spending through charts.

The application is built using **React for the frontend**, **Flask for the backend**, and **SQLite as the database**.

---

## Features

- Add expenses with title, amount, and category  
- Automatically group expenses by category  
- View total spending on the dashboard  
- Visualize expenses using a pie chart  
- Delete expenses from the list  

---

## Technologies Used

Frontend
```
React.js
Axios
Chart.js
```

Backend
```
Python
Flask
Flask SQLAlchemy
```

Database
```
SQLite
```

Version Control
```
Git
GitHub
```

---

## 📁 Project Structure

```
spendwise-expense-tracker
│
├── backend
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── routes
│       └── expense_routes.py
│
├── frontend
│   ├── src
│   │   ├── api
│   │   │   └── expenseApi.js
│   │   ├── components
│   │   │   ├── ExpenseForm.js
│   │   │   ├── ExpenseList.js
│   │   │   └── ExpenseChart.js
│   │   ├── pages
│   │   │   └── Dashboard.js
│   │   └── App.js
│
├── ai-guidance
│   ├── agents.md
│   ├── coding_standards.md
│   └── prompting_rules.md
│
└── README.md
```
---

## ⚙️ How the Application Works

```
User → React Frontend → Flask API → SQLite Database
```

1. User enters an expense in the React interface  
2. React sends the request to the Flask API  
3. Flask stores the expense in the SQLite database  
4. Data is returned to the frontend  
5. Dashboard updates with the new expense and chart  

---

## 🤖 AI Assistance

AI tools were used during development to assist with:

```
• debugging errors
• improving UI layout
• structuring backend and frontend
• implementing charts
```

More details are available in the **ai-guidance** folder.

---

## 👨‍💻 Author

```
Farhan Maquesood
Software Engineer Assessment Submission
```# spendwise-expense-tracker
