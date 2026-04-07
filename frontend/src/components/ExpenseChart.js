import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {

  const categoryTotals = {};

  expenses.forEach((e) => {
    if (!categoryTotals[e.category]) {
      categoryTotals[e.category] = 0;
    }
    categoryTotals[e.category] += e.amount;
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0"
        ]
      }
    ]
  };

return (
  <div style={{width:"250px", height:"250px"}}>
    <Pie
      data={data}
      options={{ maintainAspectRatio:false }}
    />
  </div>
);
}

export default ExpenseChart;