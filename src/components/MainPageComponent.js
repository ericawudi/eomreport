import React, { useEffect, useState, useCallback } from "react";
import { useDataContext } from "./ContextProvider";
import DoughnutChart from "./DoughnutChart";
import DataTable from "./DataTable";
import { useParams } from "react-router-dom";
import { GetS3ClientData, GetS9ClientData } from "../service/service";
import { Grid } from "@mui/material";
import Notification from "./Notification";
import DataLoading from "./DataLoading";

function MainPageComponent() {
  const { monthName, dateToSend } = useDataContext();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // server 3 values
  const [sv3Data, setSv3Data] = useState([]);
  const [totalSv3PageCount, setTotalSv3PageCount] = useState("");

  //server 9 values
  const [sv9Data, setSv9Data] = useState([]);
  const [totalSv9PageCount, setTotalSv9PageCount] = useState("");

  const { resellerUserId, resellerUsername } = useParams();
  const getClientData = useCallback(async () => {
    if (
      resellerUserId === undefined ||
      resellerUsername === undefined ||
      resellerUserId.trim() === "" ||
      resellerUsername.trim() === ""
    ) {
      return;
    }
    setLoading(true);

    const [s3Data, s9Data] = await Promise.allSettled([
      GetS3ClientData(resellerUsername, dateToSend),
      GetS9ClientData(resellerUserId, dateToSend),
    ]);
    // for server 3
    if (s3Data.status === "fulfilled") {
      const { data, status } = s3Data.value;
      if (status === 200) {
        setTotalSv3PageCount(
          `Total Sent to Telco Page Count: ${data.totalPageCount}`
        );
        setSv3Data(data.breakdown);
      } else {
        setNotificationMessage(`Server 3 ${data?.message}`);
        setOpen(true);
      }
    }

    //for server 9
    if (s9Data.status === "fulfilled") {
      const { data, status } = s9Data.value;
      if (status === 200) {
        const totalPageCount = data.reduce((result, currentVal) => {
          return result + parseInt(currentVal.page_count);
        }, 0);
        setTotalSv9PageCount(`Total On Portal: ${totalPageCount}`);
        setSv9Data(data);
      } else {
        setNotificationMessage(`Server 9 ${data?.message}`);
        setOpen(true);
      }
    }
    setLoading(false);
  }, [resellerUsername, resellerUserId, dateToSend]);

  useEffect(() => {
    getClientData();
  }, [getClientData]);

  return (
    <div id="detail">
      <h1>{monthName}</h1>
      {loading ? (
        <DataLoading size={50} server={"telco"} />
      ) : (
        <>
          <h2>{totalSv3PageCount}</h2>
          <Grid
            container
            spacing={5}
            justifyContent="space-between"
            marginBottom={10}
          >
            <Grid item md={6}>
              <DoughnutChart data={sv3Data} />
            </Grid>
            <Grid item md={6}>
              <DataTable data={sv3Data} />
            </Grid>
          </Grid>
        </>
      )}

      {loading ? (
        <DataLoading size={50} server={"portal"} />
      ) : (
        <>
          <h2>{totalSv9PageCount}</h2>

          <Grid
            container
            spacing={5}
            justifyContent="space-between"
            marginBottom={10}
          >
            <Grid item md={6}>
              <DoughnutChart data={sv9Data} />
            </Grid>
            <Grid item md={6}>
              <DataTable data={sv9Data} />
            </Grid>
          </Grid>
        </>
      )}
      <Notification
        severity="error"
        message={notificationMessage}
        openNotification={open}
        handleClose={handleClose}
        vertical="top"
        horizontal="right"
      />
    </div>
  );
}

export default MainPageComponent;
