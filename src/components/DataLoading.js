import { CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";

function DataLoading({ size = 24, server = "" }) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        marginTop: "20%",
        marginBottom: "20%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircularProgress
        size={size}
        sx={{
          color: green[500],
          marginBottom: 1,
        }}
      />
      <div>fetching {server} data...</div>
    </div>
  );
}

export default DataLoading;
