import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { convertToDoughnutData } from "../service/helper";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: 80,
};

function DoughnutChart({ data }) {
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(convertToDoughnutData(data));
  }, [data]);

  const doughnutData = {
    labels: ["MTN", "AIRTELTIGO", "VODAFONE", "FOREIGN", "EXPRESSO", "GLO"],
    datasets: [
      {
        label: "# of Votes",
        data: rows,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(232, 121, 180, 1)",
          "rgba(98, 45, 255, 1)",
        ],
      },
    ],
  };

  return (
    <div style={{ height: 420 }}>
      <Doughnut data={doughnutData} options={options} />
    </div>
  );
}

export default DoughnutChart;
