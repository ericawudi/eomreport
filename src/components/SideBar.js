import { Link } from "react-router-dom";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useDataContext } from "./ContextProvider";

function SideBar() {
  const { dateValue, handleDateChange, monthName } = useDataContext();
  return (
    <div id="sidebar">
      <h1>&#129303; from eaodesigns</h1>
      <div>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Select Month"
            inputFormat="MM/DD/YYYY"
            value={dateValue}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/client/1"}>Your Name</Link>
          </li>
          <li>
            <Link to={"/client/2"}>Your Friend</Link>
          </li>
          <li>
            <Link to={"/client/3"}>{monthName}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
