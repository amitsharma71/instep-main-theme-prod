import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  BsCart2,
  BsCurrencyDollar,
  BsGraphUp,
  BsStopwatch,
  BsTruck,
} from "react-icons/bs";
import {
  AiOutlinePlus,
  AiFillEye,
  AiOutlineArrowDown,
  AiOutlineCreditCard,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Card from "react-bootstrap/Card";
import { BsBag } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { CiPause1 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { LuSliders } from "react-icons/lu";
import { FcAddressBook, FcApproval, FcProcess } from "react-icons/fc";
import Table from "react-bootstrap/Table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const Admindashboard = (percentage) => {
  const chart = [
    { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
    { name: "May", uv: 189, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 349, pv: 4300, amt: 2100 },
    { name: "Aug", uv: 300, pv: 1398, amt: 2210 },
    { name: "Sep", uv: 500, pv: 9800, amt: 2290 },
    { name: "Oct", uv: 378, pv: 3908, amt: 2000 },
    { name: "Nov", uv: 289, pv: 4800, amt: 2181 },
    { name: "Dec", uv: 409, pv: 3800, amt: 2500 },
  ];
  let x = [];
  for (let i = 1; i < 36; i++) {
    x.push(i);
  }

  let data = [
    {
      orderNumber: "#G-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      deliveryStatus: "OrderPlaced",
      deliveryType: "Regular",
    },
    {
      orderNumber: "#G-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      deliveryStatus: "OrderPlaced",
      deliveryType: "Regular",
    },
    {
      orderNumber: "#G-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      deliveryStatus: "OrderPlaced",
      deliveryType: "Regular",
    },
    {
      orderNumber: "#G-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      deliveryStatus: "OrderPlaced",
      deliveryType: "Regular",
    },
    {
      orderNumber: "#G-Store:53",
      customerImage:
        "https://grostore.themetags.com/public/uploads/media/65bad2tYppDLFCZ2JzveKJtJX7NiX6sznq5VmUS1.jpg",
      customerName: "RahulBisht",
      customerContact: "+91-9854568222",
      placedOn: "04 Aug, 2023",
      items: "1",
      paymentStatus: "Paid",
      deliveryStatus: "orderPlaced",
      deliveryType: "regular",
    },
  ];

  return (
    <>
      <Row>
        <Col>
          <Row className="admin_toppadding ">
            <Col className="Admin_dashboard margin_bottom" md={12} lg={12} xs={12}>
              <h3> Admin Dashboard</h3>
              {/* <Button onClick={() => SignClick()}>sigin</Button> */}
              <div>
                <Button className="Admin_lbutton" variant="secondary">
                  {" "}
                  <BsCart2 className="Admin_icons" />
                  Manage Sales
                </Button>
                <Link to={"/product"}>
                  <Button className="Admin_rbutton" variant="secondary">
                    <AiOutlinePlus className="Admin_icons" />
                    Add Product
                  </Button>
                </Link>
              </div>
            </Col>
            <Col className="Admin_graphs margin_bottom" lg={8}>
              <Row>
                <Col className="margin_bottom" lg={4} md={4}>
                  <Card>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col className="margin_bottom" lg={4} md={4}>
                  <Card>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col className="margin_bottom" lg={4} md={4}>
                  <Card>
                    <Card.Body></Card.Body>
                  </Card>
                </Col>
                <Col className="margin_bottom" lg={12}>
                  <Card className="card_border">
                    <Card.Body>
                      <LineChart width={1000} height={350} data={chart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                      </LineChart>
                      {/* <Col sm={4}>
                            <Card style={{ width: "20rem", height: "250px" }}>
                              <Card.Body>
                                <div style={{ width: 200, height: 200 }}>
                                  <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                      pathColor: `rgba(62, 152, 199, ${
                                        percentage / 100
                                      })`,
                                      textColor: "#3e98c7",
                                      trailColor: "#d6d6d6",
                                      backgroundColor: "#3e98c7",
                                    })}
                                  />
                                </div>
                              </Card.Body>
                            </Card>
                          </Col> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <div className="main">
                <h2> Top Selling Products</h2>
                <h4> We have listed 35 total products.</h4>
                <div className="top_selling_products">
                  <div>
                    {x.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="paddin_bot">
            <Row>
              <Col className="margin_bottom" lg={3} md={6}>
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <BsBag className="total_order" />
                    </div>
                    <p> Total Orders</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <BsStopwatch className="total_order" />
                    </div>
                    <p> Order Pending</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <FcProcess className="total_order" />
                    </div>
                    <p> Orders Processing</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <FcApproval className="total_order" />
                    </div>
                    <p> Total Delivered</p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="recent_orders">
                  <h3>Recent Orders</h3>
                  <p>Your 10 Most Recent Orders</p>
                </div>
                <Table responsive="md" className="main">
                  <thead>
                    <tr>
                      <th>Order Code</th>
                      <th>Customer </th>
                      <th>Placed On</th>
                      <th>Items</th>
                      <th>Payment Status</th>
                      <th>Delivery Status</th>
                      <th>Delivery Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item?.orderNumber}</td>
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
                          <td>{item?.deliveryStatus}</td>
                          <td>{item?.deliveryType}</td>
                          <td>
                            <AiFillEye className="order_icon" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col className="margin_bottom" lg={3} md={6}>
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <AiOutlineArrowDown className="total_order" />
                    </div>
                    <p> Picked Up Orders</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <RxCross1 className="total_order" />
                    </div>
                    <p> Cancelled Orders</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <BsTruck className="total_order" />
                    </div>
                    <p> Out For Delivery</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <BsCurrencyDollar className="total_order" />
                    </div>
                    <p>Paid Orders</p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="margin_bottom" lg={3} md={6}>
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <AiOutlineCreditCard className="total_order" />
                    </div>
                    <p> Unpaid Orders</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <AiOutlineCalendar className="total_order" />
                    </div>
                    <p> Today's Earning</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <CiPause1 className="total_order" />
                    </div>
                    <p> Today's Pending Earning</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <BsGraphUp className="total_order" />
                    </div>
                    <p> This year earnings</p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="margin_bottom" lg={3} md={6}>
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <BsCurrencyDollar className="total_order" />
                    </div>
                    <p> Total Earnings</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <AiOutlineShoppingCart className="total_order" />
                    </div>
                    <p> Total Product Sale</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <AiOutlineCalendar className="total_order" />
                    </div>
                    <p> Today's product sale</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <FcApproval className="total_order" />
                    </div>
                    <p> This Month Product Sale</p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="margin_bottom" lg={3} md={6}>
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <BsGraphUp className="total_order" />
                    </div>
                    <p> This Year's Product Sale</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <FiUsers className="total_order" />
                    </div>
                    <p> Total Customers</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <FcAddressBook className="total_order" />
                    </div>
                    <p> Total Subscribers</p>
                  </div>
                </Card>
              </Col>
              <Col className="margin_bottom" lg={3} md={6}>
                {" "}
                <Card className="card_border">
                  <div className="order_flex">
                    <div className="orders_icon">
                      <LuSliders className="total_order" />
                    </div>
                    <p> Total Categories</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Admindashboard;
