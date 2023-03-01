import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const [auth] = useState(true);
  return auth ? <Outlet /> : <Navigate to={"/login"} replace />;
}

export default PrivateRoutes;
