import React from "react";
import { Col, Dropdown, Row, Table } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import Form from "react-bootstrap/Form";

const Customer = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding ">
            <Col className="Admin_dashboard " lg={12}>
              <h3> Customers</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <div className="custom_bord">
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div className="d-flex align-items-center ">
              <FiSearch className="allproduct_searchicon " />{" "}
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 adminsearch_bar"
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className="d-flex">
              <Dropdown>
                <Dropdown.Toggle
                  className="select_button mx-2"
                  variant="success"
                  id="dropdown-basic"
                >
                  Select Status
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"> Banned</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button type="submit" className="addcatsubit_button">
                Search
              </button>
            </div>
          </Col>
          <Table responsive="md">
            <thead>
              <tr>
                <th>S/L</th>
                <th> Name</th>
                <th> Email</th>
                <th> Phone</th>
                <th className="d-flex justify-content-end">Banned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Gopal</td>
                <td>ssss@gmail.com</td>
                <td>94568931258</td>
                <td className="d-flex justify-content-end">
                  {" "}
                  <Form>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                    />
                  </Form>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </div>
    </>
  );
};

export default Customer;
