import moment from "moment";
import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

function ContextProvider({ children }) {
  const { date } = useParams();
  const [dateValue, setValue] = useState(moment(date));
  const [dateToSend, setDateToValue] = useState(moment(date).format("YYYY-MM"));
  const [monthName, setMonthName] = useState(moment(date).format("MMMM, YYYY"));

  const handleDateChange = (newValue) => {
    setValue(newValue); //Date shown in date picker
    setMonthName(newValue.format("MMMM, YYYY")); // Date shown on main page
    setDateToValue(newValue.format("YYYY-MM")); // Date to send to API
  };

  return (
    <DataContext.Provider
      value={{ handleDateChange, monthName, dateValue, dateToSend }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContextProvider;
