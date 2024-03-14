import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillAlert } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../../../utils/auth";
import {
  Afterorder,
  Getorderdetail,
} from "../../../../Redux/action/orderSummary";
import Spinner from "../../loader/spinner";
import { useNavigate, useParams } from "react-router-dom";
const OrderConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = getUserId();
  const userLogin = localStorage.getItem("token");
  console.log(userData, "fsdafdfds");

  const { _id } = useParams();
  console.log(_id, "productID");

  const cartInfo = useSelector(
    (state) => state?.getallorderdetail?.listdata?.data?.ordersWithProducts
  );
  console.log(cartInfo, "fadfadfdsa");

  const afterOrder = useSelector(
    (state) => state?.afterorderdetail?.listdata?.data?.save
  );
  console.log(afterOrder, "ahfkjadgfdaj");

  const loading = useSelector((state) => state?.getallorderdetail?.isLoading);

  useEffect(() => {
    if (userData.id) {
      dispatch(Getorderdetail({ userid: userData.id }));
    }
    if (userData.id && _id) {
      dispatch(Afterorder({ userid: userData.id, productID: _id }));
    }
  }, [_id, dispatch]);

  const trackOrder = () => {
    navigate("/profile");
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {cartInfo &&
            cartInfo?.map((item, index) => {
              if (item._id && item._id === _id)
                console.log(item._id, "fdsfdsfd");
              return (
                <>
                  <div className=" container mainrowdata">
                    <Row>
                      <Col lg={12}>
                        <div className="order_confirm margin_bottom">
                          <Row>
                            <Col lg={9} md={8} sm={6}>
                              <div className="ordermaindiv">
                                <div className="giftdiv">
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/512/2038/2038582.png"
                                    // src={(item ? productID[0]?.thumbnail)}
                                    alt=""
                                  />
                                </div>
                                <div className="tida_div" key={index}>
                                  <h3> Order placed </h3>

                                  {/* <p>{item?.productID[0]?.title}</p> */}

                                  <p>order time and date</p>
                                </div>
                              </div>
                            </Col>
                            <Col
                              lg={3}
                              md={4}
                              sm={4}
                              className="seemyorderbutton"
                            >
                              <div className="pt-4">
                                <p>Why Call? Just click!</p>
                                <button
                                  onClick={trackOrder}
                                  className="gotomyorders"
                                >
                                  Go to My Orders
                                </button>
                                <img src="" alt="" />
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                    <div className="order_confirm margin_bottom">
                      <Row>
                        <Col lg={4}>
                          <div className="addressmaindiv">
                            {/* <p>{cartInfo[0]?.deliveryAddress}</p> */}
                            <p>{userData?.username}</p>
                            <p>{userData?.userEmail}</p>
                            <p>{item?.deliveryAddress}</p>
                            <p>Phone number</p>
                          </div>
                        </Col>
                        <Col lg={4} className="right_border">
                          <div className="customermain_div">
                            <div>
                              <img
                                className="customer_detail"
                                src={
                                  item?.productID[0]?.thumbnail
                                    ? `http://localhost:5000/uploads/${item?.productID[0]?.thumbnail}`
                                    : ""
                                }
                                alt=""
                              />
                            </div>
                            <div className="product_Titleconfirm">
                              <p>{item?.productID[0]?.title}</p>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className="quanityconfirmation">
                            <div>
                              <h4>Quantity -</h4>
                              <p>{item?.quantity}</p>
                            </div>
                            <div>
                              <h4>Price -</h4>
                              <div className="priceconfirmation">
                                {" "}
                                {item?.productID[0]?.price}
                              </div>
                            </div>
                          </div>
                          {/* <div className="price_confirmation">
                                </div>{" "} */}
                        </Col>
                      </Row>
                    </div>

                    <Row>
                      <Col lg={12}>
                        <div className="order_confirm margin_bottom">
                          <Row>
                            <Col lg={2} className="right_border">
                              {/* <div className="customermain_div">
                              <div>
                                <BsTruck
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    color: "#4EB529",
                                  }}
                                />
                              </div>

                              <div>delivery expected date</div>
                            </div> */}
                            </Col>
                            <Col lg={4}>
                              {/* <div className="price_confirmation">
                                  <p>Price</p>
                                  <p> {item?.productID[0]?.price}</p>
                                </div>{" "} */}
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <div className="order_confirm margin_bottom">
                          <div className="customermain_div">
                            <div>
                              <div className="d-flex align-items-center ">
                                <AiFillAlert className="alerticon_confirm" />
                                <p>Beware of fraudent class & message</p>
                              </div>
                              <div>
                                <p className="mb-3">
                                  we don't ask for bank OTP/pin for offers or
                                  demand money
                                </p>
                              </div>
                              <button
                                className="readbuttommore mx-4"
                                onClick={() => navigate("/paymentsecurity")}
                              >
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </>
              );
            })}
        </>
      )}
    </>
  );
};

export default OrderConfirmation;
