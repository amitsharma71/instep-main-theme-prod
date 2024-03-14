import React, { memo } from "react";
import Mainheader from "../component/admin/header/Mainheader";
import { Navigate, Outlet } from "react-router-dom";
import SidebarFun from "../component/admin/dashboardPage/sidebar/Navbarside";
import { Col, Container, Row } from "react-bootstrap";

const AdminLayout = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <>
      <Mainheader />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <SidebarFun />
          </Col>
          <Col lg={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <Navigate to="/signin" />
  );
};

export default memo(AdminLayout);
