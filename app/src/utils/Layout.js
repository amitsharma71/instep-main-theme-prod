import React, { memo } from "react";
import { Outlet, Navigate } from "react-router";
import Usernavbar from "../component/user/UserHeader/usernavbar/usernavbar";
import MainFooter from "../component/user/UserHeader/usernavbar/footer";
import { useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();

  const token = localStorage.getItem("token");
  return token ? (
    <>
      {pathname === "/deliverydetail/id" ? (
        <>
          <Usernavbar />
          <Outlet />
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <div style={{ flex: 1 }}>
              <Usernavbar />
              <Outlet />
            </div>
            <MainFooter />
          </div>
        </>
      )}
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default memo(Layout);
