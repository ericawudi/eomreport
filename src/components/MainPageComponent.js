import React from "react";
import { useDataContext } from "./ContextProvider";
import DoughnutChart from "./DoughnuChart";
import DataTable from "./DataTable";
import VerticalChartBar from "./VerticalChartBar";

function MainPageComponent() {
  const { monthName } = useDataContext();
  return (
    <div id="detail">
      <h1>{monthName}</h1>
      Doughnut Chart
      <DoughnutChart />
      <DataTable />
      <VerticalChartBar />
    </div>
  );
}

export default MainPageComponent;
