import { memo } from "react";
import React from "react";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import { Navigate, Outlet } from "react-router-dom";

function CustomerLayout() {
  const token = localStorage.getItem("token");

  return !token ? (
    <>
      <Usernavbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default memo(CustomerLayout);