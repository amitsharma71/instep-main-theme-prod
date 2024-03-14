import React from "react";
import { Col, Row } from "react-bootstrap";

const OrderCancellation = () => {
  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <Row>
            <Col lg={3} md={4}>
              <div className="recent_orders ordersdival_in">
                <th>TYPE OF ISSUES</th>
                <div
                  class="nav flex-column nav-pills "
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active "
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      Help with your issues
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      Delivery related
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      Login and my account
                    </div>
                  </button>
                  <button
                    class="nav-link"
                    id="v-pills-wishlist-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-wishlist"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-wishlist"
                    aria-selected="false"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      Refund related
                    </div>
                  </button>
                  {/* <button
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <div className="d-flex justify-content-start align-items-center">
                      Refund related
                    </div>
                  </button> */}
                </div>
              </div>
            </Col>
            <Col lg={9} md={8}>
              <div className="recent_orders">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <h3 className="margin_bottom">
                      What issue are you facing?
                    </h3>
                    <div className="d-flex align-items-start flex-column margin_bottom">
                      <p> I want to manage my order</p>
                      <p className="vcorao"> view, cancel or return an order</p>
                    </div>
                    <div className="d-flex align-items-start flex-column margin_bottom">
                      <p> I want help with return & refunds</p>
                      <p className="vcorao"> Manage and track returns</p>
                    </div>
                    <div className="d-flex align-items-start flex-column ">
                      <p> I want to contact the seller</p>
                      <p className="vcorao"> view, cancel or return an order</p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <h3 className="margin_bottom">Delivery related</h3>
                    <div className="d-flex align-items-start flex-column margin_bottom">
                      <p className="margin_bottom backgroundquery">
                        What should i do if my order is approved but hasn't been
                        shipped yet?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Can I take shipment after opening and checking the
                        contents inside?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        How quickly can i get my order delivered?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        My order has reached the nearest delivery hub, but why
                        isn't it out for delivery yet?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Why can't i track my order even thought it has been
                        shipped?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        I have a complaint about the courier executive who came
                        to deliver my order?
                      </p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <h3 className="margin_bottom">Login and my account</h3>
                    <div className="d-flex align-items-start flex-column margin_bottom">
                      <p className="margin_bottom backgroundquery">
                        Can I reactivate my inactive Instepcart account?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Do I need to verify my mobile number or email address
                        every time I log in?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        What is an OTP or verification code?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Why do I need to verify my mobile number or email
                        address to log into my Instepcart account?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Can I use an international number to sign up?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        How can I use my mobile number to login on the Instepcart
                        mobile app?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        I'm getting an error message that says, 'You've exceeded
                        the maximum number of attempts to enter correct
                        verification code'. How can I log in to my Instepcart   
                        account now?
                      </p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-wishlist"
                    role="tabpanel"
                    aria-labelledby="v-pills-wishlist-tab"
                  >
                    <h3 className="margin_bottom">Refunds related</h3>
                    <div className="d-flex align-items-start flex-column margin_bottom">
                      <p className="margin_bottom backgroundquery">
                        What are the modes of refund available after
                        cancellation?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        I've still not received the refund in my bank account.
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Will I get a complete refund if the item is cancelled or
                        returned if I have paid for the order using the 'Credit
                        Card No Cost EMI' payment option?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Can I get the refund for the item to any other mode if I
                        have paid using the Bajaj Finserv payment option?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Can I get the refund for the item through any other mode
                        if I have paid for my order using the 'Pre-approved EMI'
                        payment option?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Can I get the refund for the item through any other mode
                        if I have paid using the 'Credit Card No Cost EMI'
                        payment option?
                      </p>
                      <p className="margin_bottom backgroundquery">
                        Where will the refunds for my order be credited?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default OrderCancellation;
