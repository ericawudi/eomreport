import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDataContext } from "./ContextProvider";
import DoughnutChart from "./DoughnuChart";
import DataTable from "./DataTable";
import VerticalChartBar from "./VerticalChartBar";
import { useParams } from "react-router-dom";
import { GetClientData } from "../service/service";

function MainPageComponent() {
  const { monthName } = useDataContext();

  const [doughnutData, setDoughnutData] = useState(null);
  const [lineData, setLineData] = useState(null);
  const [tableData, setTableData] = useState(null);

  const { username, date } = useParams();

  const getClientData = async () => {
    const response = await GetClientData(username, date);
    // console.log({ response });
  };

  useEffect(() => {
    getClientData();
  }, [username, date]);

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
