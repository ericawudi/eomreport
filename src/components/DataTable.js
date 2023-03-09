import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { convertToTableData } from "../service/helper";

const columns = [
  { field: "id", headerName: "ID", hide: true, sortable: false },
  {
    field: "network",
    headerName: "Network",
    disabled: true,
    sortable: false,
    disableColumnMenu: true,
    width: 150,
  },
  {
    field: "smsCount",
    headerName: "SMS Count",
    disabled: true,
    hide: true,
    sortable: false,
    disableColumnMenu: true,
    width: 150,
  },
  {
    field: "pageCount",
    headerName: "Page Count",
    disabled: true,
    sortable: false,
    disableColumnMenu: true,
  },
];

function DataTable({ data }) {
  const [rows /*setRows*/] = useState(convertToTableData(data));
  const [rowNumber, setRowNumber] = useState(6);

  // useEffect(() => {
  //   setRows(convertToTableData(data));
  // }, [data]); //use memo to implement this. It won't work the way you want 'cos it's an obj

  return (
    <div style={{ height: 420 }}>
      <DataGrid
        rows={rows}
        // getRowId={(row) => row.network}
        columns={columns}
        pageSize={rowNumber}
        rowsPerPageOptions={[5, 6, 10]}
        disableSelectionOnClick
        onPageSizeChange={(newNumber) => setRowNumber(newNumber)}
      />
    </div>
  );
}

export default DataTable;
