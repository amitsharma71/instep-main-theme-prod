import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { getUserId } from "../../../utils/auth";
import { cartinfo } from "../../../Redux/action/usercartinfo";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line, RiSubtractFill } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";
import { addToCartAction, removeFromCart,} from "../../../Redux/action/addToCartAction";
import Modal from "react-bootstrap/Modal";
import Spinner from "../loader/spinner";

const AddToCartProduct = () => {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState({});
  
  const [deleteId, setDeleteId] = useState("");

  const [deleteState, SetDeleteState] = useState([]);

  const userData = getUserId();

  const userLogin = localStorage.getItem("token");

  const dispatch = useDispatch();

  const loading = useSelector((state) => state?.getproductdata?.isLoading);
  const cartLoading = useSelector((state) => state?.addToCartFile?.isLoading);
  const myCartL = useSelector((state) => state?.cartdetails?.listdata);

  useEffect(() => {
    if (userData && userData.id) dispatch(cartinfo({ userid: userData.id }));
  }, []);

  const onHandleClickPlus = (id) => {
    let apiObject = {
      productid: id,
      userid: userData?.id,
      quantity: 1,
    };
    dispatch(addToCartAction(apiObject)).then((res) => {
      if (res.payload.success) {
        dispatch(cartinfo({ userid: userData.id }));
      }
    });
  };

  const onHandleClickMinus = (id) => {
    let apiObject = {
      productid: id,
      userid: userData?.id,
      quantity: -1,
    };

    dispatch(addToCartAction(apiObject)).then((res) => {
      if (res.payload.success) {
        dispatch(cartinfo({ userid: userData.id }));
      }
    });
  };

  const getTotalPrice = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        return (
          accumulator +
          currentValue?.productDetails[0]?.price * currentValue?.quantity
        );
      }, 0);
    }

    return count;
  };

  const getTotalDiscount = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        let discountprice =
          (currentValue?.productDetails[0]?.discountpercentage / 100) *
          currentValue?.productDetails[0]?.price *
          currentValue?.quantity;
        return accumulator + discountprice;
      }, 0);

      return count;
    }
  };

  const getDiscountPercentage = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        return (
          accumulator + currentValue?.productDetails[0]?.discountpercentage
        );
      }, 0);

      return count / myCartL?.length;
    }
  };

  const handleClose = () => setShow(false);

  const handleSubmit = (id) => {
    dispatch(
      removeFromCart({ userId: userData?.id, productIdToRemove: deleteId })
    ).then((res) => {
      SetDeleteState([...deleteState, deleteId]);
      dispatch(cartinfo({ userid: userData.id }));
      handleClose();
    });
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      {cartLoading && <Spinner />}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container slider_col">
            {myCartL && myCartL.length === 0 ? (
              <Row>
                <Col lg={12}>
                  <div className="addtocartpro_duct">
                    <div className="emptycart_align">
                      <p>Missing Cart Items ?</p>
                      <Button onClick={() => navigate("/allproduct")}>
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            ) : (
              <>
                <Row>
                  <Col lg={9}>
                    <div className="hide_addtocart">
                      <Row>
                        <Col lg={2} className="addtocart_padding ">
                          <div className="addtocarthead ">
                            <p className="addhead_startdiv">Image</p>
                          </div>
                        </Col>
                        <Col lg={2} className="addtocart_padding">
                          <div className="addtocarthead">
                            <p>Product Name</p>
                          </div>
                        </Col>
                        <Col lg={2} className="addtocart_padding">
                          <div className="addtocarthead">
                            <p>U. Price</p>
                          </div>
                        </Col>
                        <Col lg={2} className="addtocart_padding">
                          <div className="addtocarthead">
                            <p>Quantity</p>
                          </div>
                        </Col>
                        <Col lg={2} className="addtocart_padding">
                          <div className="addtocarthead">
                            <p>T. Price</p>
                          </div>
                        </Col>
                        <Col lg={2} className="addtocart_padding">
                          <div className="addtocarthead ">
                            <p className="addhead_enddiv">Action</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <Row>
                      <Col lg={12}>
                        <div className="addtocartpro_duct">
                          <Row>
                            {myCartL &&
                              myCartL?.map((e, index) => {
                                console.log(e, "adasdasdasdasdasda");

                                if (e.productid) {
                                }
                                if (!deleteState.includes(e?.productid)) {
                                  return (
                                    <>
                                      <Col lg={2} md={2} sm={2} key={index}>
                                        <Link
                                          className="card_deco"
                                          to={`/productdetail/${e.productid}`}
                                        >
                                          <div>
                                            <img
                                              className="addtocart_img"
                                              variant="top"
                                              src={
                                                e?.productDetails[0]?.image
                                                  ? e?.productDetails[0]?.image
                                                  : e?.productDetails[0]?.thumbnail?.split(
                                                      ":"
                                                    ).length > 1
                                                  ? e?.productDetails[0]
                                                      ?.thumbnail
                                                  : `http://localhost:5000/uploads/${e?.productDetails[0]?.thumbnail}`
                                              }
                                              alt=""
                                            />
                                          </div>
                                        </Link>
                                      </Col>
                                      <Col lg={2} md={2} sm={2}>
                                        <div className="addtocart_title">
                                          {e?.productDetails[0]?.title}
                                        </div>
                                      </Col>
                                      <Col lg={2} md={2} sm={2}>
                                        <div className="addtocart_title forehide_mobilescreen">
                                          <h5>
                                            ₹{" "}
                                            {e?.productDetails[0]?.price?.toFixed(
                                              0
                                            )}
                                          </h5>
                                        </div>
                                      </Col>
                                      <Col lg={2} md={2} sm={3} xs={4}>
                                        <div className="addcart_quantity">
                                          <div
                                            style={{ width: "25px" }}
                                            className="subtract"
                                          >
                                            <span
                                              onClick={() => {
                                                onHandleClickMinus(
                                                  e?.productid
                                                );
                                              }}
                                              className={`${
                                                e?.quantity +
                                                  (quantity[e?.productid] ||
                                                    0) ===
                                                1
                                                  ? "pe-none"
                                                  : ""
                                              }`}
                                              style={{
                                                color:
                                                  e?.quantity +
                                                    (quantity[e?.productid] ||
                                                      0) ===
                                                  1
                                                    ? "#C2C2C6"
                                                    : "inherit",
                                              }}
                                            >
                                              <RiSubtractFill />
                                            </span>
                                          </div>
                                          <span className="quantityval_ue">
                                            {quantity[e?.productid]
                                              ? e?.quantity +
                                                quantity[e?.productid]
                                              : e?.quantity}
                                          </span>
                                          <div
                                            onClick={() => {
                                              onHandleClickPlus(e?.productid);
                                            }}
                                            className="add"
                                          >
                                            <span>
                                              <AiOutlinePlus />
                                            </span>
                                          </div>
                                        </div>
                                      </Col>
                                      <Col lg={2} md={2} sm={2} xs={4}>
                                        <div className="addtocart_title">
                                          <h5>
                                            ₹
                                            {quantity[e?.productid]
                                              ? e?.productDetails[0]?.price?.toFixed(
                                                  0
                                                ) *
                                                (e?.quantity +
                                                  quantity[e?.productid])
                                              : e?.productDetails[0]?.price?.toFixed(
                                                  0
                                                ) * e?.quantity}
                                          </h5>
                                        </div>
                                      </Col>
                                      <Col lg={2} md={2} sm={1} xs={4}>
                                        <div className="addtocart_title">
                                          <RiDeleteBin6Line
                                            className="remove_cart"
                                            onClick={() => {
                                              setDeleteId(e?.productid);
                                              handleShow();
                                            }}
                                          />
                                          <Modal
                                            className="removerfromcart_modal"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                            show={show}
                                            onHide={handleClose}
                                          >
                                            <Modal.Header closeButton>
                                              <Modal.Title>
                                                Remove Item
                                              </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              Are you sure you want to remove
                                              this item ?
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button
                                                className="cancelbut_removecart"
                                                variant="secondary"
                                                onClick={handleClose}
                                              >
                                                CANCEL
                                              </Button>
                                              <Button
                                                className="removebut_cart"
                                                variant="primary"
                                                onClick={() => {
                                                  handleSubmit(
                                                    e?.productDetails[0]?._id
                                                  );
                                                }}
                                              >
                                                REMOVE
                                              </Button>
                                            </Modal.Footer>
                                          </Modal>
                                        </div>
                                      </Col>
                                    </>
                                  );
                                }
                              })}
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={3}>
                    <div className="rightpricedetail margin_bottom">
                      <div className="addcartpricede_tail margin_bottom ">
                        <h5>PRICE DETAIL</h5>
                      </div>
                      <div className="d-flex justify-content-between  margin_bottom">
                        <p className="totalamountright_">Price</p>
                        <p>₹{getTotalPrice()?.toFixed(0)}</p>
                      </div>
                      <div className="d-flex justify-content-between margin_bottom">
                        <p className="totalamountright_">Discount</p>
                        <span className="discountpercentage_">
                          {getDiscountPercentage()?.toFixed(0)}%
                        </span>
                      </div>
                      <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                        <p className="totalamountright_">Delivery Charges</p>
                        <p>-----------</p>
                      </div>
                      <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                        <h5>Total Amount</h5>
                        <p>
                          ₹{(getTotalPrice() - getTotalDiscount())?.toFixed(0)}
                        </p>
                      </div>
                      {console.log(getTotalDiscount(), "getTotalDiscount()")}
                      <h6 className="discountpercentage_">
                        Your Will save ₹{getTotalDiscount()?.toFixed(0)} on this
                        order
                      </h6>
                      <div></div>
                      <div className="securityline">
                        <SiSpringsecurity className="securepayment_icon" />
                        <div>
                          Safe and Secure Payments.Easy returns.100% Authentic
                          products.
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="plceorderbutton_cart col-lg-9">
                  {myCartL && myCartL?.length >= 1 && (
                    <Link to="/deliverydetail/id">
                      <button className="placeorder_butcart">
                        Place Order
                      </button>
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default AddToCartProduct;
