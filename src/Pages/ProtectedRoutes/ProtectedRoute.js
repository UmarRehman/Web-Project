import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const chkAuth = () => {
  let auth = localStorage.getItem("user");
  if (auth) {
    return true;
  } else {
    return false;
  }
};

function ProtectedRoute() {
  const navigate = useNavigate();
  let auth = chkAuth();
  return auth ? navigate("/") : <Outlet />;
}

export default ProtectedRoute;
