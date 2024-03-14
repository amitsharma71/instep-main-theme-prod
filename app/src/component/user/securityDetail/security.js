import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="container">
      <div className=" slider_col margin_bottom">
        <Row>
          <Col lg={12}>
            <div className="paymentdetail_main">
              <h5>Safe and Secure Shopping</h5>
              <div>
                <h6>Is making online payment secure on Instepcart?</h6>
                <ul>
                  <li>
                    Yes, making the online payment is secure on Instepcart
                  </li>
                </ul>
              </div>
              <div>
                <h6>Does Instepcart store my credit/debit card infomation?</h6>
                <ul>
                  <li>
                    No. Instepcart only stores the last 4 digits of your card
                    number for the purpose of card identification.
                  </li>
                </ul>
              </div>
              <div>
                <h6>What credit/debit cards are accepted on Instepcart?</h6>
                <ul>
                  <li>
                    We accept VISA, MasterCard, Maestro, Rupay, American
                    Express, Diner's Club and Discover credit/debit cards.
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  Do you accept payment made by credit/debit cards issued in
                  other countries?
                </h6>
                <ul>
                  <li>
                    Yes! We accept VISA, MasterCard, Maestro, American Express
                    credit/debit cards issued by banks in India and in the
                    following countries: Australia, Austria, Belgium, Canada,
                    Cyprus, Denmark, Finland, France, Germany, Ireland, Italy,
                    Luxembourg, the Netherlands, New Zealand, Norway, Portugal,
                    Singapore, Spain, Sweden, the UK and the US. Please note
                    that we do not accept internationally issued credit/debit
                    cards for eGV payments/top-ups.
                  </li>
                </ul>
              </div>
              <div>
                <h6>Privacy Policy</h6>
                <ul>
                  <li>
                    Instepcart.com respects your privacy and is committed to
                    protecting it. For more details, please see our{" "}
                    <Link reloadDocument to="/privacypolicy">Privacy Policy</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Security;
