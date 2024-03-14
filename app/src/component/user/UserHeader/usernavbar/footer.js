import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  BsFillBagFill,
  BsFillGiftFill,
  BsQuestionCircleFill,
  BsStarHalf,
} from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function MainFooter() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid huuuuuuuuuuuuuu">
      <Row>
        <footer>
          <div className="top">
            <ul>
              <h5>ABOUT</h5>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link style={{ pointerEvents: "none" }} to="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <Link>Press</Link>
              </li>
            </ul>
            <ul>
              <h5>HELP</h5>
              <li>
                <Link to="/paymentdetail">Payments</Link>
              </li>
              <li>
                <Link to="/shippingdetail">Shipping</Link>
              </li>
              <li>
                <Link to="/ordercancellationandreturn">
                  Cancellation & Return
                </Link>
              </li>
              <li onClick={() => navigate("/ordercancellationandreturn")}>
                <a>FAQ</a>
              </li>
              <li>
                <Link>Report Infringment</Link>
              </li>
            </ul>
            <ul>
              <h5>CONSUMER POLICY</h5>
              <li>
                <Link to="/returnpolicy">Return Policy</Link>
              </li>
              <li>
                <Link to="/termofuse">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/paymentsecurity">Security</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
              <li>
                <Link to="/grievanceRedressal">Grievance Redressal</Link>
              </li>
              <li>
                <Link to="/e-wastecompliance">EPR Compliance</Link>
              </li>
            </ul>
            <ul>
              <h5>SOCIAL</h5>
              <li>
                {" "}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook style={{ color: "#3966FF" }} />
                </a>
              </li>

              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <FaTwitter style={{ color: "#3C73E9" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaYoutube style={{ color: "#E62E2D" }} />
                </a>
              </li>
            </ul>
            <ul className="left_border">
              <h5 className="text">Mail Us:</h5>
              <p>
                <Link
                  className="footer_deCo"
                  to="https://mail.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  mailto:instepcart@mail.com
                </Link>{" "}
                <br />
              </p>
            </ul>
            <ul>
              <h5> Registered Office Address:</h5>
              <Link
                className="footer_deCo"
                to="https://www.google.com/maps/place/InStep+Technologies+Private+Limited/@30.6603992,76.8579138,17z/data=!3m1!4b1!4m6!3m5!1s0x390f93449bb5d4b3:0x914dd5a1fe28cc76!8m2!3d30.6603946!4d76.8604887!16s%2Fg%2F11csqwp2_w?entry=ttu"
              >
                <p>
                  {" "}
                  Tricity Plaza, Office No. 14
                  <br />
                  Ground, Peer Muchalla <br />
                  Zirakpur, Punjab 140603
                </p>
                <p className="tele">
                  Telephone: <span>000-000-0000</span>{" "}
                </p>
              </Link>
            </ul>
          </div>
          <Row>
            <Col className="social">
              {/* <i>
                {" "}
                <BsFillBagFill className="Soc_icon" />
                Become a Seller
              </i> */}
              {/* <i>
                {" "}
                <BsStarHalf className="Soc_icon" />
                Advertise
              </i> */}
              {/* <i>
                {" "}
                <BsFillGiftFill className="Soc_icon" />
                Gift Cards
              </i> */}
              <i>
                <div onClick={() => navigate("/ordercancellationandreturn")}>
                  <BsQuestionCircleFill className="Soc_icon" />
                  Help Center
                </div>
              </i>
              <i> &copy; 2023 Instepcart.com</i>
            </Col>
          </Row>
          {/* <div className="info">
      <div className="legal">
        <a href="dg">Terms & Conditions</a><a href="dg">Privacy Policy</a>
      </div>
      <div className="copyright">2021 Copyright &copy; Sean B</div>
    </div> */}
        </footer>
      </Row>
    </div>
  );
}
