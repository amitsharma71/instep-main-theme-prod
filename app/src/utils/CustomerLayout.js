import { memo } from "react";
import React from "react";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import { Navigate, Outlet } from "react-router-dom";
import MainFooter from "../component/user/UserHeader/usernavbar/footer";

function CustomerLayout() {
  const token = localStorage.getItem("token");

  return !token ? (
    <>
      <Usernavbar />
      <Outlet />
      <MainFooter />

    </>
  ) : (
    <Navigate to="/" />
  );
}

export default memo(CustomerLayout);
