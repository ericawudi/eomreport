import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification(props) {
  const {
    severity,
    message = "",
    vertical = "bottom",
    horizontal = "center",
    openNotification = false,
    handleClose,
  } = props;

  return (
    <Stack spacing={2}>
      <Snackbar
        open={openNotification}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity={severity} /* sx={{ width: "100%" }} */
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Notification;
