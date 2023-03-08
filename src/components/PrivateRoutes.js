import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../service/service";

function PrivateRoutes() {
  const auth = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to={"/login"} replace />;
}

export default PrivateRoutes;
