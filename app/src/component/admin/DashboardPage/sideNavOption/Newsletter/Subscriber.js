//Subscribers inside the newsletter
import React, { useState } from "react";
import { Button, Col, Dropdown, Form, Row, Table } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin5Fill, RiDeleteBin5Line } from "react-icons/ri";
import Delete from "../../../deleteModel/delete";

function Subscribeuser() {
  const [show, setShow] = useState(false);

  const [categoryid, setCategoryid] = useState(null);

  const handleClose = useState(true);

  // const handleDelete = (id) => {
  //   handleClose();
  // };
  const handleShow = (id) => {
    setCategoryid(id);
    setShow(true);
  };
  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Subscribers</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="searchbutton">
            <div className="form_control_or_btngroup">
              <div className="all_product_search location_search">
                <FiSearch className="allproduct_searchicon " />
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 search_bar"
                />
              </div>
              <div className="btngroup location_button alllocation_button">
                <Button className="select_button m-0 d-flex" type="submit">
                  search
                </Button>
              </div>
            </div>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>S/L</th>
                  <th> Email</th>
                  <th> Suibscribed At</th>
                  <th>
                    <div className="d-flex justify-content-end">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> forestgreen@example.com</td>
                  <td>12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td> waterblue@themetags.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td> skyblue@example.com</td>
                  <td> 12-03-2023</td>
                  <td>
                    <div className="d-flex justify-content-end">
                      <MdDelete
                        className="deleteicn_forpro"
                        onClick={() => {
                          handleShow();
                        }}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            Showing 1-11 of 11 results
          </Col>
        </Row>
        {show && (
          <Delete
            // handleDelete={handleDelete}
            handleClose={handleClose}
            show={show}
            categoryId={categoryid}
          />
        )}
      </div>
    </>
  );
}

export default Subscribeuser;
