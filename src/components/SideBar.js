import { NavLink, useNavigate } from "react-router-dom";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import LogoutIcon from "@mui/icons-material/Logout";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useDataContext } from "./ContextProvider";
import { IconButton, Tooltip } from "@mui/material";
import { logUserOut } from "../service/service";
import sidebarLinks from "../assets/clients.json";

function SideBar() {
  const { dateValue, handleDateChange, dateToSend } = useDataContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logUserOut();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div id="sidebar">
      <h1 id="logout">
        <Tooltip title={"Logout"}>
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
        <div>
          &#129303; from
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            to={"https:/eaodesigns.com"}
          >
            {` eaodesigns`}
          </NavLink>
        </div>
      </h1>
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
          {sidebarLinks.map((navLink) => {
            const { username, id, resellerUserId, resellerUsername } = navLink;
            return (
              <li key={id}>
                <NavLink
                  to={`/${resellerUsername}/${resellerUserId}/${dateToSend}`}
                  // state={navLink} //issue we get nothing on refresh.
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  {username}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
