import React from "react";
import { Col, Row, Table } from "react-bootstrap";

const Returnpolicy = () => {
  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <div className="d-flex justify-content-center align-items-center flex-column margin_bottom">
            <h3 className="margin_bottom">
              Order Cancellation and Return Policy
            </h3>
            <h3>Cancellation Policy</h3>
          </div>
          <p className="margin_bottom">
            The customer can choose to cancel an order any time before it's
            dispatched. The order cannot be canceled once it’s out for delivery.
            However, the customer may choose to reject it at the doorstep
          </p>
          <p className="margin_bottom">
            The time window for cancellation varies based on different
            categories and the order cannot be canceled once the specified time
            has passed.
          </p>
          <p className="margin_bottom">
            In some cases, the customer may not be allowed to cancel the order
            for free, post the specified time and a cancellation fee will be
            charged. The details about the time window mentioned on the product
            page or order confirmation page will be considered final.
          </p>
          <p className="margin_bottom">
            In case of any cancellation from the seller due to unforeseen
            circumstances, a full refund will be initiated for prepaid orders.
          </p>
          <p className="margin_bottom">
            Instepcart reserves the right to accept the cancellation of any order.
            Instepcart also reserves the right to waive off or modify the time
            window or cancellation fee from time to time.
          </p>
          <div className="d-flex justify-content-center align-items-center flex-column margin_bottom">
            <h3>Returns Policy</h3>
          </div>
          <p className="margin_bottom">
            Returns is a scheme provided by respective sellers directly under
            this policy in terms of which the option of exchange, replacement
            and/ or refund is offered by the respective sellers to you. All
            products listed under a particular category may not have the same
            returns policy. For all products, the returns/replacement policy
            provided on the product page shall prevail over the general returns
            policy. Do refer the respective item's applicable return/replacement
            policy on the product page for any exceptions to this returns policy
            and the table below
          </p>
          <p className="margin_bottom">
            The return policy is divided into three parts; Do read all sections
            carefully to understand the conditions and cases under which returns
            will be accepted.
          </p>
          <p>Part 1 – Category, Return Window and Actions possible</p>
        </div>
        <Row>
          <Col lg={12}>
            <Table responsive="md">
              <thead className="row">
                <tr>
                  <th className="col-lg-9">Category</th>
                  <th className="col-lg-3">
                    Returns Window, Actions Possible and Conditions (if any)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="row">
                  <td className="col-lg-9 paddingt_r">
                    Furniture Home: Pet Supplies & Rest of Home. (Except Home
                    décor, Furnishing, Home Improvement Tools, Household Items)
                  </td>
                  <td className="col-lg-3 paddinglt-r">
                    <p className="margin_bottom">10 days</p>

                    <p className="margin_bottom">Refund or Replacement</p>

                    <p className="margin_bottom">
                      For products requiring installation, returns shall be
                      eligible only when such products are installed by the
                      brand&#39;s authorized personnel.
                    </p>

                    <p className="margin_bottom">
                      In order to help you resolve issues with your product, we
                      may troubleshoot your product either through online tools,
                      over the phone, and/or through an in-person technical
                      visit.
                    </p>

                    <p className="margin_bottom">
                      If a defect is determined within the Returns Window, a
                      refund/replacement of the same product will be provided at
                      no additional cost. If no defect is confirmed or the issue
                      is not diagnosed within 10 days of delivery or
                      Installation wherever applicable, you will be directed to
                      a brand service centre to resolve any subsequent issues.
                    </p>

                    <p className="margin_bottom">
                      In any case, only one replacement shall be provided
                    </p>
                  </td>
                </tr>
                <tr className="row">
                  <td className="col-lg-9 paddingt_r">
                    <p className="margin_bottom ">
                      Lifestyle: Watch, T-Shirt, Footwear, Sari, Short, Dress,
                      Kid’s (Capri, Shorts & Tops), Men’s (Ethnic Wear, Shirt,
                      Formals, Jeans, Clothing Accessory), Women’s (Ethnic Wear,
                      Fabric, Blouse, Jean, Skirt, Trousers, Bra), Bags,
                      Raincoat, Sunglass, Belt, Frame, Backpack, Suitcase,
                      Luggage, etc...
                    </p>

                    <p className="margin_bottom">
                      Lifestyle: Jewellery, Footwear Accessories, Travel
                      Accessories, Watch Accessories, etc..
                    </p>

                    <p className="margin_bottom">
                      Lifestyle: WinterWear(sweatshirt, jacket, sweater,
                      cardigan, kids_thermal, pullover, windcheater, track_suit,
                      thermal,shawl, track_top, glove, muffler, scarf, blazer,
                      uniform_sweatshirt, uniform_blazer, kids_muffler,
                      kids_mitten, shrug, poncho,uniform_sweater, cap,
                      waistcoat, leg_warmer, legging,elder_halloween_costume)
                    </p>
                  </td>
                  <td className="col-lg-3 paddinglt-r">
                    <p className="margin_bottom">10 days</p>

                    <p className="margin_bottom">
                      Refund, Replacement or Exchange
                    </p>
                  </td>
                </tr>
                <tr className="row">
                  <td className="col-lg-9 paddingt_r">
                    Medicine (Allopathy & Homeopathy)
                  </td>
                  <td className="col-lg-3 paddinglt-r">
                    <p className="margin_bottom">2 days</p>
                    <p>Refund</p>
                  </td>
                </tr>
                <tr className="row">
                  <td className="col-lg-9 paddingt_r">
                    Home: Home Improvement Tools, Household Items, Home décor,
                    Furnishing
                  </td>
                  <td className="col-lg-3 paddinglt-r">
                    <p className="margin_bottom">7 days</p>
                    <p className="margin_bottom">Refund or replacement</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Returnpolicy;
