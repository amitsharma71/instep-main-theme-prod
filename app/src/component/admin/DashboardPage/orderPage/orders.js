import React from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { AiFillEye, AiOutlineSearch } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Orders = () => {
  let data = [
    {
      sl: "1",
      orderCode: "#I-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      status: "orderPlaced",
      type: "regular",
      location: "default",
    },
    {
      sl: "2",
      orderCode: "#I-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      status: "orderPlaced",
      type: "regular",
      location: "default",
    },
    {
      sl: "3",
      orderCode: "#I-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      status: "orderPlaced",
      type: "regular",
      location: "default",
    },
    {
      sl: "4",
      orderCode: "#I-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      status: "orderPlaced",
      type: "regular",
      location: "default",
    },
    {
      sl: "5",
      orderCode: "#I-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      status: "orderPlaced",
      type: "regular",
      location: "default",
    },
  ];
  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Orders</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="searchbutton">
            <div className="form_control_or_btngroup row">
              <div className="orders_Search col-lg-3 col-xl-3">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 adminsearch_bar"
                />
              </div>
              <div className="orders_fivebutton col-lg-9 col-xl-9">
                <Dropdown>
                  <Dropdown.Toggle
                    className="select_button"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Payment Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    className="select_button"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Delivery Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    className="select_button"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Location
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    className="select_button"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Online Orders
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button className="select_button m-0" type="submit">
                  {" "}
                  <AiOutlineSearch /> search
                </Button>
              </div>
            </div>
            <Table responsive="md">
              <thead>
                <tr>
                  <th>S/L</th>
                  <th>Order Code</th>
                  <th>Customer</th>
                  <th>Placed On</th>
                  <th>Items</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item?.sl}</td>
                      <td>{item?.orderCode}</td>
                      <td>
                        <div className="d-flex">
                          <img
                            className="order_img me-2"
                            src={item?.customerImage}
                            alt="#"
                          />
                          <div>
                            <p>{item?.customerName}</p>
                            <p>{item?.customerContact}</p>
                          </div>
                        </div>
                      </td>
                      <td>{item?.placedOn}</td>
                      <td>{item?.items}</td>
                      <td>{item?.paymentStatus}</td>
                      <td>{item?.status}</td>
                      <td>{item?.type}</td>
                      <td>{item?.location}</td>
                      <td className=" ">
                        <AiFillEye className="order_icon" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="table_pageination">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item disabled>{5}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Orders;
