import React, { useState } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import { GoSortDesc } from "react-icons/go";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";

function Subcategorymobilefilter() {
  const [bottomOffcanvassort, setBottomOffcanvassort] = useState(false);
  const [bottomOffcanvasfilter, setBottomOffcanvasfilter] = useState(false);
  const sort = [
    { value: "Relevance" },
    { value: "Popularity" },
    { value: "Price--Low to High" },
    { value: "Price--High to Low" },
    { value: "Newest First" },
  ];

  const filterprice = [
    { value: "Rs. 299 - Rs. 499" },
    { value: "Rs. 500 - Rs. 999" },
    { value: "Rs. 500 - Rs. 999" },
    { value: "Rs. 500 - Rs. 999" },
    { value: "Rs. 500 - Rs. 999" },
  ];

  const brand = [
    { value: "SAFARI" },
    { value: "AMERICAN TOURISTER" },
    { value: "WILDCRAFT" },
    { value: "WROGN" },
    { value: "GEAR" },
    { value: "ADIDAS" },
    { value: "PUMA" },
    { value: "NIKE" },
    { value: "GUCCI" },
    { value: "OFF DUTY" },
    { value: "SAFARI" },
    { value: "SAFARI" },
    { value: "SAFARI" },
  ];

  const customerating = [{ value: " 4 & above" }, { value: " 3 & above" }];

  const offers = [{ value: "Buy More, Save More" }, { value: "Special Price" }];

  const discount = [
    { value: "50% or more" },
    { value: "30% or more" },
    { value: "40% or more" },
    { value: "60% or more" },
    { value: "70% or more" },
  ];
  const handleClosesort = () => setBottomOffcanvassort(false);
  const handleClosefilter = () => setBottomOffcanvasfilter(false);
  const handleShowSort = () => setBottomOffcanvassort(true);
  const handleShowprice = () => setBottomOffcanvasfilter(true);

  return (
    <Row>
      <Col sm={4} xs={4} className="ftgret">
        <div className="filter_leftbutton margin_bottom">
          <button className="hidebuttonfor_mob" onClick={handleShowSort}>
            <GoSortDesc className="" />
            Sort By
          </button>
          <Offcanvas
            show={bottomOffcanvassort}
            placement="bottom"
            onHide={handleClosesort}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sort By</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                {sort &&
                  sort?.map((e) => {
                    return (
                      <>
                        <li className=" d-flex justify-content-between">
                          {" "}
                          {e.value}{" "}
                          <input
                            type="radio"
                            value="Relevance"
                            name="ss"
                          ></input>
                        </li>
                      </>
                    );
                  })}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Col>
      <Col sm={4} xs={4} className="ftgret">
        <div className="filter_leftbutton margin_bottom">
          <button className="hidebuttonfor_mob" onClick={handleShowprice}>
            <AiOutlineFilter className="filter_icon" />
            Filters
          </button>
          <Offcanvas
            show={bottomOffcanvasfilter}
            placement="bottom"
            onHide={handleClosefilter}
            className="offcanvas_height"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div class="d-flex align-items-start ">
                <div
                  className="nav flex-column  me-3 filter_catdiv"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="filterbutton_col active"
                    id="v-pills-price-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-price"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-price"
                    aria-selected="true"
                  >
                    Price
                  </button>
                  <button
                    className="filterbutton_col"
                    id="v-pills-deliverAt-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-deliverAt"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-deliverAt"
                    aria-selected="false"
                  >
                    Deliver At
                  </button>
                  <button
                    className="filterbutton_col"
                    id="v-pills-brand-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-brand"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-brand"
                    aria-selected="false"
                  >
                    Brand
                  </button>
                  <button
                    className="filterbutton_col"
                    id="v-pills-customerRatings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-customerRatings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-customerRatings"
                    aria-selected="false"
                  >
                    Customer Ratings
                  </button>
                  <button
                    className="filterbutton_col"
                    id="v-pills-offers-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-offers"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-offers"
                    aria-selected="false"
                  >
                    Offers
                  </button>
                  <button
                    className="filterbutton_col"
                    id="v-pills-gstInvoices-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-gstInvoices"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-gstInvoices"
                    aria-selected="false"
                  >
                    GST invoices
                  </button>
                  <button
                    className="filterbutton_col"
                    id="v-pills-discount-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-discount"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-discount"
                    aria-selected="false"
                  >
                    Discount
                  </button>
                  <button
                    className="filterbutton_col"
                    id="v-pills-category-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-category"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-category"
                    aria-selected="false"
                  >
                    Category
                  </button>
                </div>
                <div
                  className="tab-content  mobilefilter_style"
                  id="v-pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-price"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <ul>
                      {filterprice?.map((item) => {
                        return (
                          <>
                            <li>
                              <input
                                className="checkboxsize"
                                type="checkbox"
                                value="Rs. 299 - Rs. 499"
                              />
                              <lable className="fontweight">{item.value}</lable>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-deliverAt"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="">
                      <div>
                        <input
                          type="text"
                          placeholder="  Enter Delivery Pincode"
                          className="locationfilter margin_bottom"
                        />
                        <button className="slider_rightbutton" type="submit">
                          Submit
                        </button>
                      </div>
                      <div className="d-flex">
                        <CiLocationOn className="deliverylocationcode" />
                        <h4>use my current location</h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-brand"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <ul>
                      {brand?.map((item) => {
                        return (
                          <>
                            <li>
                              <input
                                className="checkboxsize"
                                type="checkbox"
                                value="Rs. 299 - Rs. 499"
                              />
                              <lable className="fontweight">{item.value}</lable>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-customerRatings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <ul>
                      {customerating?.map((item) => {
                        return (
                          <>
                            <li>
                              <input
                                className="checkboxsize"
                                type="checkbox"
                                value="Rs. 299 - Rs. 499"
                              />
                              <lable className="fontweight">{item.value}</lable>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-offers"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <ul>
                      {offers?.map((item) => {
                        return (
                          <>
                            <li>
                              <input
                                className="checkboxsize"
                                type="checkbox"
                                value="Rs. 299 - Rs. 499"
                              />
                              <lable className="fontweight">{item.value}</lable>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-discount"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <ul>
                      {discount?.map((item) => {
                        return (
                          <>
                            <li>
                              <input
                                className="checkboxsize"
                                type="checkbox"
                                value="Rs. 299 - Rs. 499"
                              />
                              <lable className="fontweight">{item.value}</lable>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-category"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <ul>
                      {filterprice?.map((item) => {
                        return (
                          <>
                            <li>
                              <input
                                className="checkboxsize"
                                type="checkbox"
                                value="Rs. 299 - Rs. 499"
                              />
                              <lable className="fontweight">{item.value}</lable>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Col>
      {/* <Col lg={4} md={4} sm={4} xs={4} className="ftgret">
      <div className="filter_leftbutton margin_bottom">
          <button className="hidebuttonfor_mob" onClick={handleShowprice}>
           Rating
          </button>
          <Offcanvas
            show={bottomOffcanvasfilter}
            placement="bottom"
            onHide={handleClosefilter}
            className="offcanvas_height"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Col>  */}
    </Row>
  );
}
export default Subcategorymobilefilter;
