import ContextProvider from "../components/ContextProvider";
import MainPageComponent from "../components/MainPageComponent";
import SideBar from "../components/SideBar";

function Dashboard() {
  return (
    <ContextProvider>
      <SideBar />
      <MainPageComponent />
    </ContextProvider>
  );
}

export default Dashboard;
