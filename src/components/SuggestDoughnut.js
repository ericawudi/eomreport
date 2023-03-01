import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      data: [10, 20, 30, 40],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#3cba9f"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#3cba9f"],
    },
  ],
};

const options = {
  cutoutPercentage: 60, // set the cutout percentage to 60%
};

const DoughnutChart = () => (
  <div>
    <Doughnut data={data} options={options} />
  </div>
);

export default DoughnutChart;
