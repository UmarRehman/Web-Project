import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

const GetUserData = (data) => {
  if (data !== "") {
    return true;
  } else {
    return false;
  }
};
function PrivateRoute() {
  const navigate = useNavigate();
  const data = useSelector((index) => index.ItemsInArray);
  const UserStatus = GetUserData(data);
  return UserStatus ? navigate("/login") : <Outlet />;
}

export default PrivateRoute;
