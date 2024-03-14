import React from "react";
import { Button, Card, Col, Dropdown, Form, Row } from "react-bootstrap";
import { LuShoppingCart } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Possystemtype = () => {
  return (
    <>
      <Row>
        <Col lg={8} className="admin_toppadding boxshadow">
          <div className="pos_buttons">
            <div>
              <Button className="pos_catbutton" variant="secondary">
                Categories
              </Button>
              <Button className=" pos_brabutton" variant="secondary">
                Brands for ceck
              </Button>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  className="pos_locbutton"
                  variant="success"
                  id="dropdown-basic"
                >
                  Default Location
                  <MdOutlineArrowDropDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Default Location
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <Row>
            <Col lg={12}>
              <div className="cat_div">
                <Swiper
                  breakpoints={{
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                  }}
                  spaceBetween={10}
                  slidesPerView={1}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="pos_detail">
                      <div className="pos_catimage">
                        <div>
                          fff
                          {/* <LuShoppingCart /> */}
                        </div>
                      </div>
                      <div className="pos_content">
                        <p>All Categories</p>
                        <p> Items</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pos_detail">
                      <div className="pos_catimage">
                        <div>
                          fff
                          {/* <LuShoppingCart /> */}
                        </div>
                      </div>
                      <div className="pos_content">
                        <p>Electronics</p>
                        <p>Items</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pos_detail">
                      <div className="pos_catimage">
                        <div>
                          fff
                          {/* <LuShoppingCart /> */}
                        </div>
                      </div>
                      <div className="pos_content">
                        <p>Men</p>
                        <p> Items</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pos_detail">
                      <div className="pos_catimage">
                        <div>
                          fff
                          {/* <LuShoppingCart /> */}
                        </div>
                      </div>
                      <div className="pos_content">
                        <p>Women</p>
                        <p> Items</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pos_detail">
                      <div className="pos_catimage">
                        <div>
                          fff
                          {/* <LuShoppingCart /> */}
                        </div>
                      </div>
                      <div className="pos_content">
                        <p>Home & Kitchen</p>
                        <p> Items</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="pos_detail">
                      <div className="pos_catimage">
                        <div>
                          fff
                          {/* <LuShoppingCart /> */}
                        </div>
                      </div>
                      <div className="pos_content">
                        <p>Appliances</p>
                        <p> Items</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pos_detail">
                      <div className="pos_catimage">
                        <div>
                          fff
                          {/* <LuShoppingCart /> */}
                        </div>
                      </div>
                      <div className="pos_content">
                        <p>Sports & More</p>
                        <p> Items</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="alllisted_product">
              <Col lg={4}>
                <div>
                  <h2>All Listed Products</h2>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pos_search">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 pos_search"
                  />
                </div>
              </Col>
              <Col lg={2}>
                <Button className="pos_submit" type="submit">
                  Search
                </Button>
              </Col>
              <Col lg={2}>
                <Button className="add_code" type="submit">
                  Add Item by Code
                </Button>
              </Col>
            </div>
          </Row>
          <Row>
            <Col lg={3}></Col>
            <Col lg={3}></Col>
            <Col lg={3}></Col>
            <Col lg={3}></Col>
          </Row>
        </Col>
        <Col lg={4} className="admin_toppadding">
          <div className="billin_secction">
            <div>
              <h3>Billing Section </h3>
            </div>
            <div className="add_customer">
              <Dropdown>
                <Dropdown.Toggle
                  className="pos_locbutton"
                  variant="success"
                  id="dropdown-basic"
                >
                  Delivered <MdOutlineArrowDropDown />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Delivered</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Order Placed</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="new_order_billing">
                <AiOutlinePlusCircle className="new_billicon" /> New Order
              </div>
            </div>
            <div>
              {" "}
              <Button className="add_code" type="submit">
                <BsPersonFillAdd />
                Customer
              </Button>
            </div>
          </div>
          <Row>
            <Col lg={12}>
              <div className="billing_section ">
                <div className="pos_catimage"></div>
                <div>
                  Customer <div>+0000 000 000</div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Possystemtype;
