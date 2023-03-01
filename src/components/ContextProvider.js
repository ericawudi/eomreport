import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

function ContextProvider({ children }) {
  const [dateValue, setValue] = useState(new Date());
  const [monthName, setMonthName] = useState("February");
  const handleDateChange = (newValue) => {
    setValue(newValue);
    setMonthName(newValue.format("MMMM"));
  };

  return (
    <DataContext.Provider value={{ handleDateChange, monthName, dateValue }}>
      {children}
    </DataContext.Provider>
  );
}

export default ContextProvider;
