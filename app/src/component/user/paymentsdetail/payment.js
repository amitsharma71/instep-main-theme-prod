import React from "react";
import { Col, Row } from "react-bootstrap";

const Payment = () => {
  return (
    <div className="container">
      <div className=" slider_col margin_bottom">
        <Row>
          <Col lg={12}>
            <div className="paymentdetail_main">
              <div className="margin_bottom">
                <h5>Payments</h5>
              </div>
              <div>
                <h6>How do I pay for a Instepcart purchase?</h6>
                <ul>
                  <li>
                    Instepcart offers you multiple payment methods. Whatever
                    your online mode of payment, you can rest assured that
                    Instepcart's trusted payment gateway partners use secure
                    encryption technology to keep your transaction details
                    confidential at all times.
                  </li>
                  <li>
                    You may use Internet Banking, Gift Card, Cash on Delivery
                    and Wallet to make your purchase.
                  </li>
                  <li>
                    Instepcart also accepts payments made using Visa,
                    MasterCard, Maestro and American Express credit/debit cards
                    in India and -- other countries.
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  Are there any hidden charges (Octroi or Sales Tax) when I make
                  a purchase on Instepcart?
                </h6>
                <ul>
                  <li>
                    There are NO hidden charges when you make a purchase on
                    Instepcart. The prices listed for all the items are final
                    and all-inclusive. The price you see on the product page is
                    exactly what you pay.
                  </li>
                </ul>
              </div>
              <div>
                <h6>What is Cash on Delivery?</h6>
                <ul>
                  <li>
                    If you are not comfortable making an online payment on
                    Instepcart.com, you can opt for the Cash on Delivery (C-o-D)
                    payment method instead. With C-o-D you can pay in cash at
                    the time of actual delivery of the product at your doorstep,
                    without requiring you to make any advance payment online.
                  </li>
                  <li>
                    The maximum order value for a Cash on Delivery (C-o-D)
                    payment is ₹50,000. It is strictly a cash-only payment
                    method. Gift Cards or store credit cannot be used for C-o-D
                    orders. Foreign currency cannot be used to make a C-o-D
                    payment. Only Indian Rupees accepted.
                  </li>
                </ul>
              </div>
              <div>
                <h6>How do I pay using a credit/debit card?</h6>
                <ul>
                  <li>
                    We accept payments made by credit/debit cards issued in
                    India and -- other countries.
                  </li>
                </ul>
              </div>
              <div>
                <h6>Credit cards</h6>
                <ul>
                  <li>
                    We accept payments made using Visa, MasterCard and American
                    Express credit cards.
                  </li>
                  <li>
                    To pay using your credit card at checkout, you will need
                    your card number, expiry date, three-digit CVV number (found
                    on the backside of your card). After entering these details,
                    you will be redirected to the bank's page for entering the
                    online 3D Secure password.
                  </li>
                </ul>
              </div>
              <div>
                <h6>Debit cards</h6>
                <ul>
                  <li>
                    We accept payments made using Visa, MasterCard and Maestro
                    debit cards. To pay using your debit card at checkout, you
                    will need your card number, expiry date (optional for
                    Maestro cards), three-digit CVV number (optional for Maestro
                    cards). You will then be redirected to your bank's secure
                    page for entering your online password (issued by your bank)
                    to complete the payment.
                  </li>
                </ul>
              </div>
              <div>
                <h6>Is it safe to use my credit/debit card on Instepcart?</h6>
                <ul>
                  <li>
                    Your online transaction on Instepcart is secure with the
                    highest levels of transaction security currently available
                    on the Internet. Instepcart uses 256-bit encryption
                    technology to protect your card information while securely
                    transmitting it to the respective banks for payment
                    processing.
                  </li>
                  <li>
                    All credit card and debit card payments on Instepcart are
                    processed through secure and trusted payment gateways
                    managed by leading banks. Banks now use the 3D Secure
                    password service for online transactions, providing an
                    additional layer of security through identity verification.
                  </li>
                </ul>
              </div>
              <div>
                <h6>What steps does Instepcart take to prevent card fraud?</h6>
                <ul>
                  <li>
                    Instepcart realizes the importance of a strong fraud
                    detection and resolution capability. We and our online
                    payments partners monitor transactions continuously for
                    suspicious activity and flag potentially fraudulent
                    transactions for manual verification by our team.
                  </li>
                  <li>
                    In the rarest of rare cases, when our team is unable to rule
                    out the possibility of fraud categorically, the transaction
                    is kept on hold, and the customer is requested to provide
                    identity documents. The ID documents help us ensure that the
                    purchases were indeed made by a genuine card holder. We
                    apologise for any inconvenience that may be caused to
                    customers and request them to bear with us in the larger
                    interest of ensuring a safe and secure environment for
                    online transactions.
                  </li>
                </ul>
              </div>
              <div>
                <h6>How does 'Instant Cashback' work?</h6>
                <ul>
                  <li>
                    The 'Cashback' offer is instant and exclusive to
                    Instepcart.com. You only pay the final price you see in your
                    shopping cart.
                  </li>
                </ul>
              </div>
              <div>
                <h6>How do I place a Cash on Delivery (C-o-D) order?</h6>
                <ul>
                  <li>
                    All items that have the "Cash on Delivery Available" icon
                    are valid for order by Cash on Delivery.
                  </li>
                  Term & Conditions:
                  <li>The maximum order value for C-o-D is ₹50,000</li>
                  <li>Cash-only payment at the time of delivery.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Payment;
