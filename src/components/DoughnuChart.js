import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["MTN", "AIRTELTIGO", "VODAFONE", "FOREIGN"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 17],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
  ],
};

const options = {
  cutout: 70,
};

function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
