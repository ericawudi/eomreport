import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export const data = {
  labels: ["MTN", "AIRTELTIGO", "VODAFONE", "FOREIGN"],
  datasets: [
    {
      label: "s3 Total: 12345",
      data: [
        { x: "MTN", y: 232 },
        { x: "AIRTELTIGO", y: 989 },
        { x: "VODAFONE", y: 519 },
        { x: "FOREIGN", y: 765 },
      ],
      backgroundColor: "rgb(0, 128, 0)",
    },
    {
      label: "s9 Total: 6789",
      data: [
        { x: "MTN", y: 999 },
        { x: "AIRTELTIGO", y: 675 },
        { x: "VODAFONE", y: 324 },
        { x: "FOREIGN", y: 908 },
      ],
      backgroundColor: "rgb(123, 31, 161)",
    },
  ],
};

function VerticalChartBar() {
  return <Bar options={options} data={data} />;
}

export default VerticalChartBar;
