import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", hide: true, sortable: false },
  {
    field: "network",
    headerName: "Network",
    disabled: true,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "counts3",
    headerName: "Count s3",
    disabled: true,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "counts8",
    headerName: "Count s8",
    disabled: true,
    sortable: false,
    disableColumnMenu: true,
  },
];
const rows = [
  { id: 1, network: "MTN", counts3: 23, counts8: 25 },
  { id: 2, network: "AIRTELTIGO", counts3: 213, counts8: 254 },
  { id: 3, network: "VODAFONE", counts3: 587, counts8: 543 },
  { id: 4, network: "FOREIGN", counts3: 19, counts8: 14 },
];

function DataTable() {
  return (
    <div style={{ height: 320, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[2, 4, 5, 10]}
        disableSelectionOnClick
        components={{}}
      />
    </div>
  );
}

export default DataTable;
