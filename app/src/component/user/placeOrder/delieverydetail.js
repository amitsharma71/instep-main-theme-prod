import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { FaTruckLoading } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { BiSolidStarHalf } from "react-icons/bi";
import { getUserId } from "../../../utils/auth";
import { BsColumnsGap, BsPlusCircleFill, BsTags } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import {
  deliveryGetAction,
  deliveryaddress,
} from "../../../Redux/action/deliveryAddress";
import RadioInput from "./radioButton";
import { singleproduct } from "../../../Redux/action/getsingleProduct";
import { CiLocationOn } from "react-icons/ci";
import {
  deleteCartAfterPayment,
  paymentOrder,
} from "../../../Redux/action/paymentOrderAction";
// import { options } from "../../../../../api/router/razorpay";
import useRazorpay from "react-razorpay";
import { Afterorder } from "../../../Redux/action/orderSummary";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { cartinfo } from "../../../Redux/action/usercartinfo";

const Delieverydetail = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [showCol, setShowCol] = useState("initial");
  const [imageState, setImageState] = useState();
  const [activeKey, setactiveKey] = useState(0);
  const [hidedata, setHidata] = useState("");
  const [razorPaymentId, setRazorPaymentId] = useState("");
  const [qty, setQty] = useState(1);
  const [numberValue, setNumberValue] = useState("");
  const [alternateNumberValue, setAlternateNumberValue] = useState("");
  const data = useSelector((state) => state?.deliveraddress?.listdata);

  // const history = useHistory()
  const navigate = useNavigate();
  const userLogin = getUserId();
  console.log(userLogin, "userLogin");
  const dataId = userLogin.id;
  console.log(dataId, "dataId");

  const { _id } = useParams();

  const dispatch = useDispatch();
  const myCartL = useSelector((state) => state?.cartdetails.listdata);
  console.log(myCartL, "dafdfdsfdas");

  const addressdata = useSelector(
    (state) => state?.deliveryaddressget?.listdata?.data
  );

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
  console.log(myCartL, "mycartL");

  const getTotalDiscount = () => {
    let count = 0;
    if (myCartL && myCartL.length > 0) {
      count = myCartL?.reduce((accumulator, currentValue, index) => {
        let discountprice =
          (currentValue?.productDetails[0]?.discountpercentage / 100) *
          currentValue?.productDetails[0]?.price *
          currentValue?.quantity;
        console.log(discountprice, "disc");
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

      console.log(count / myCartL?.length, "ekrfioejroij");
      return count / myCartL?.length;
    }
  };
  useEffect(() => {
    dispatch(
      deliveryGetAction({
        userID: dataId,
      })
    ).then((res) => {
      // console.log(res,'fiwihojel')
      if (res && res.payload && res.payload.success) {
        console.log(res, "fwioenlk");
        setFormVisible(false);
      } else {
        setFormVisible(true);
      }
    });
  }, [dataId]);

  const [addressEventKey, setEventKey] = useState(0);

  const showDeliveryAddress = (eventKey) => {
    setEventKey(eventKey);
  };

  const handleSubmit = (values) => {
    if (
      (values?.mobilenumber &&
        values?.mobilenumber?.toString()?.length !== 10) ||
      (values?.AlternateNumber &&
        values?.AlternateNumber?.toString()?.length !== 10)
    ) {
      toast.error("Please check the mobile number");
    } else {
      values.userID = dataId;

      dispatch(deliveryaddress(values)).then((res) => {
        if (res) {
          dispatch(deliveryGetAction(values));
        }
        setFormVisible(false);
      });
      console.log(values, "values");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "Required";
    }
    if (!values.pincode) {
      errors.pincode = "Required";
    }
    if (!values.Locality) {
      errors.Locality = "Required";
    }
    if (!values.addresstype) {
      errors.addresstype = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.state) {
      errors.state = "Required";

      if (!values.landmark) {
        errors.landmark = "Required";
      }
      if (!values.AlternateNumber) {
        errors.AlternateNumber = "Required";
      }
    }
    return errors;
  };

  const defaultAccord = 1;
  // console.log(defaultAccord, "aaasmqxs");

  // For radio button

  const [selectedAddressType, setSelectedAddressType] = useState("Home");
  const [address, setAddress] = useState(null);

  const handleRadioChange = (event) => {
    console.log(event, "feiojrlk");
    setSelectedAddressType(event?.target?.value);
    setAddress(event);
    // console.log(value, "valuess ", event);
  };

  const handleSubmitradio = (event) => {
    event.preventDefault();
    console.log("Selected address type:", selectedAddressType);

    // You can perform further actions or submit the data to an API here
  };

  const dData = useSelector((state) => state?.singleproduct?.listdata);
  console.log(dData, "dDatadData");

  useEffect(() => {
    if (_id) {
      dispatch(singleproduct({ _id }));
    } else {
      dispatch(cartinfo({ userLogin: userLogin.id }));
    }
  }, [_id, userLogin.id]);

  const deliverClick = (address) => {
    if (!address) {
      toast.error(" Please select the address");
    } else {
      if (addressdata) {
        setactiveKey(2);
      } else if (!addressdata) {
        setactiveKey();
      }
    }
  };

  const handleChange = (e) => {
    console.log(e, "aaasss");
  };

  const order = useSelector((state) => state?.paymentorderdata?.listdata);

  console.log(order, "orderdata");
  console.log(order?.data?.order?.amount, "orderdatasa");

  let paymentDetails = {};

  const [Razorpay, isLoaded] = useRazorpay();

  const [razorpayInstance, on, off] = useRazorpay();
  console.log(dData?.price * qty, "addressdata");

  const [orderHit, setOrderHit] = useState(false);

  const handlePayment = useCallback(() => {
    console.log("callertettt");

    const calculateLoadAmount = () => {
      const baseAmount =
        dData &&
        (
          dData.price -
          (dData?.price * dData?.discountpercentage) / 100
        )?.toFixed(0) * 100
          ? (
              dData.price -
              (dData?.price * dData?.discountpercentage) / 100
            )?.toFixed(0) * 100
          : (getTotalPrice() - getTotalDiscount())?.toFixed(0) * 100;

      return { amount: baseAmount };
    };

    const load = calculateLoadAmount();

    dispatch(
      paymentOrder({
        ...load,
        currency: "INR",
        productIDs: myCartL?.map((item) => item?._id),
      })
    )
      .then((res) => {
        console.log(res, "paymentid");
        const paymentes = res.razorpay_payment_id;
        console.log(paymentes, "paymentes");
        setOrderHit(true);
      })
      .catch((error) => {
        console.error("Payment error:", error);
        // Handle payment error if needed
      });

    if (order && orderHit) {
      const orderAmount =
        dData &&
        (
          dData.price -
          (dData?.price * dData?.discountpercentage) / 100
        )?.toFixed(0) * 100
          ? (
              dData.price -
              (dData?.price * dData?.discountpercentage) / 100
            )?.toFixed(0) * 100
          : (getTotalPrice() - getTotalDiscount())?.toFixed(0) * 100;

      console.log(orderAmount, qty, "orderAmount");
      if (orderAmount) {
        const options = {
          key: "rzp_test_Nfb5anftyihnMA",
          amount: orderAmount, // Multiplying by 100 as Razorpay expects amount in paise
          currency: "INR",
          name: "Instep Cart",
          description: "Test Transaction",
          image:
            "https://insteptechnologies.com/wp-content/uploads/2022/04/main-logo.png",
          order_id: order?.data?.id,
          productIDs: myCartL.map((item) => item._id),
          handler: function (res) {
            console.log("Payment-success:", res);

            const orderid = res?.razorpay_payment_id;
            console.log(orderid, "orderidorderid");
            setRazorPaymentId(orderid);

            // Storing payment details in the paymentDetails variable
            const paymentDetails = {
              paymentStatus: res.razorpay_payment_id
                ? "paid-payment"
                : "payment-failed",
              orderId: res.razorpay_order_id,
              amount: res.razorpay_payment_amount, // Converting back to rupees
              // ... add other details as needed
            };

            console.log("Payment status:", paymentDetails.paymentStatus);
            console.log("Order ID:", paymentDetails.orderId);
            console.log("Amount:", paymentDetails.amount);

            // Here you can dispatch an action or perform further processing with the payment details
            const payloads = {
              userid: dataId,
              deliveryAddress: addressdata[0]?._id,
              amount: dData?.price,
              payment_id: res?.razorpay_payment_id, // Using the Razorpay order ID as payment reference
              productID: dData?._id,
              quantity: qty,
              // ... other order-related details
            };

            // Dispatch an action to send order details after successful payment
            dispatch(Afterorder(payloads)).then((response) => {
              console.log(response, "resssss");
              if (response?.payload?.data?.success) {
                dispatch(
                  deleteCartAfterPayment({
                    productIDs: myCartL?.map((item) => item?._id),
                  })
                );
              } else if (response?.meta?.rejectedWithValue) {
                toast.error("Payment is not successfull");
              } else {
                toast.error("payment is not completed");
              }
              navigate(
                `/orderconfirmation/${response?.payload?.data?.save?._id}`
              );
              window.location.reload();
            });
            // history.push("/orderconfirmation")
            // navigate("/orderconfirmation")
          },
          prefill: {
            name: "Amit",
            email: "amit71instep@gmail.com",
            contact: "7973114358",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#4eb529",
          },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
      }

      setOrderHit(false);
    }
  }, [
    dispatch,
    order,
    dData,
    qty,
    getTotalPrice,
    getTotalDiscount,
    myCartL,
    setOrderHit,
  ]);

  console.log("Paymentdetails:", paymentDetails);

  const handleMoveToSignIn = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    window.location.reload();
  };

  useEffect(() => {
    if (addressdata && addressdata?.length === 1) {
      setactiveKey(2);
      // address accordion
    } else if (!addressdata || (addressdata && addressdata?.length > 1)) {
      setactiveKey(1);
    }
  }, [addressdata]);
  console.log(selectedAddressType, "addrfwefwefess");

  return (
    <>
      <div className="container">
        <div className=" slider_col margin_bottom">
          <Accordion
            disable
            activeKey={activeKey}
            onSelect={(e) => setactiveKey(e)}
          >
            <Row>
              <Col lg={9}>
                <div className=" margin_bottom">
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header>
                      <div className="loginmain_align ">
                        <div className="">
                          <div className="d-flex mx-2">
                            <div className="logindetail">1</div>
                            <p>LOGIN</p>
                            <p>
                              <TiTick className="logindetail_icon" />
                            </p>
                          </div>
                          <div className="individual_info">
                            <p className="fw-bold">{userLogin?.username}</p>
                            <p className="fw-bold">
                              {myCartL?.length > 0 &&
                                myCartL[0]?.userdata?.length > 0 &&
                                myCartL[0]?.userdata[0]?.number?.length > 0 &&
                                myCartL[0]?.userdata[0]?.number[0]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col lg={6}>
                          <div
                            className="individual_info login_contalign"
                            onClick={() => handleMoveToSignIn()}
                          >
                            Logout & Sign in to another account
                            <button
                              value="continue checkout"
                              className="logincont"
                              onClick={() => showDeliveryAddress(1)}
                            >
                              CONTINUE CHECKOUT
                            </button>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div>
                            <p className="advantag_es my-2">
                              Advantage of our secure login
                            </p>
                            <p className="my-1">
                              <FaTruckLoading className="logindel" />
                              Easily Track Orders, Hassle free Returns
                            </p>
                            <p className="my-1">
                              <MdOutlineNotificationsActive className="logindel" />
                              Get Relevant Alerts and Recommendation
                            </p>
                            <p>
                              <BiSolidStarHalf className="logindel" />
                              Wishlist, Reviews, Ratings and more.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <Row>
                  <Col lg={12}>
                    <div className="margin_bottom">
                      <Accordion.Item activeKey={addressEventKey} eventKey={1}>
                        <Accordion.Header>
                          <div className="loginmain_align">
                            <div className="d-flex my-3">
                              <div className="logindetail">2</div>
                              <div className="d-flex mx-2">
                                <p>DELIVERY ADDRESS</p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {addressdata &&
                            addressdata?.map((e) => {
                              console.log(e, "mnsdnsfnsj");
                              return (
                                <>
                                  <div className="d-flex mb-3 ">
                                    <div className="fdsfdsf">
                                      <input
                                        className="form-check-input hello"
                                        type="radio"
                                        name="addresstype"
                                        value={e}
                                        id="flexRadioDefault1"
                                        checked={address == e}
                                        onChange={() => handleRadioChange(e)}
                                      />
                                    </div>
                                    <div>
                                      <div className="selectadressdetail">
                                        <p>{e.name}</p>
                                        <div>{e.addresstype}</div>
                                        <p>{e.mobilenumber}</p>
                                      </div>
                                      <div className="bottomdivaddress">
                                        <p>{e.address}</p>
                                        <p>{e.pincode}</p>,<p>{e.landmark}</p>,
                                        <p>{e.Locality}</p>
                                        <p>{e.state}</p>,
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          {addressdata && (
                            <button
                              className="readbuttommore mt-2 margin_bottom"
                              onClick={() => deliverClick(address)}
                            >
                              Delivery Here
                            </button>
                          )}

                          <form onSubmit={handleSubmitradio}></form>
                          <Row>
                            <Col lg={10}>
                              {isFormVisible && (
                                <Form
                                  onSubmit={handleSubmit}
                                  validate={validate}
                                  render={({
                                    handleSubmit,
                                    form,
                                    submitting,
                                    pristine,
                                    values,
                                  }) => (
                                    <form onSubmit={handleSubmit}>
                                      <div className=" margin_bottom row">
                                        <Field name="name">
                                          {({ input, meta }) => (
                                            <div className="fields col-lg-6">
                                              <input
                                                {...input}
                                                type="text"
                                                placeholder="Name"
                                                className="inputfiels_place"
                                                maxLength={20}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                        <Field name="mobilenumber">
                                          {({ input, meta }) => (
                                            <div className="fields col-lg-6">
                                              <input
                                                type="text"
                                                placeholder="10-digit mobile number"
                                                className="inputfiels_place"
                                                onChange={(event) => {
                                                  if (
                                                    !/[0-9]/.test(event.key)
                                                  ) {
                                                    const inputValue =
                                                      event.target.value.replace(
                                                        /\D/g,
                                                        ""
                                                      );
                                                    input.onChange(
                                                      Number(inputValue)
                                                    );
                                                  }
                                                }}
                                                maxLength={10}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                      </div>
                                      <div className=" margin_bottom row">
                                        <Field name="pincode">
                                          {({ input, meta }) => (
                                            <div className="fields col-lg-6">
                                              <input
                                                {...input}
                                                type="text"
                                                placeholder="pincode"
                                                className="inputfiels_place"
                                                onChange={(event) => {
                                                  if (
                                                    !/[0-9]/.test(event.key)
                                                  ) {
                                                    const inputValue =
                                                      event.target.value.replace(
                                                        /\D/g,
                                                        ""
                                                      );
                                                    input.onChange(
                                                      Number(inputValue)
                                                    );
                                                  }
                                                }}
                                                maxLength={6}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                        <Field name="Locality">
                                          {({ input, meta }) => (
                                            <div className="fields col-lg-6">
                                              <input
                                                {...input}
                                                type="text"
                                                placeholder="locality"
                                                className="inputfiels_place"
                                                maxLength={20}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                      </div>
                                      <div className="row">
                                        <Field name="address">
                                          {({ input, meta }) => (
                                            <div className="addressbottommain margin_bottom col-lg-12">
                                              <input
                                                {...input}
                                                type="text"
                                                placeholder="address"
                                                className="addressmaininput"
                                                maxLength={40}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                      </div>
                                      <div className="adsressmaindiv_top margin_bottom row">
                                        <Field name="state">
                                          {({ input, meta }) => (
                                            <div className="fields col-lg-6">
                                              <input
                                                {...input}
                                                type="text"
                                                placeholder="City/District/Town"
                                                className="inputfiels_place"
                                                maxLength={20}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                      </div>
                                      <div className=" margin_bottom row">
                                        <Field name="landmark">
                                          {({ input, meta }) => (
                                            <div className="fields col-lg-6">
                                              <input
                                                {...input}
                                                type="text"
                                                placeholder="landmark"
                                                className="inputfiels_place"
                                                maxLength={30}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>

                                        <Field name="AlternateNumber">
                                          {({ input, meta }) => (
                                            <div className="fields col-lg-6">
                                              <input
                                                type="text"
                                                placeholder="Alternate phone (optinal)"
                                                className="inputfiels_place"
                                                onChange={(event) => {
                                                  if (
                                                    !/[0-9]/.test(event.key)
                                                  ) {
                                                    const inputValue =
                                                      event.target.value.replace(
                                                        /\D/g,
                                                        ""
                                                      );
                                                    input.onChange(
                                                      Number(inputValue)
                                                    );
                                                  }
                                                }}
                                                maxLength={10}
                                              />
                                              {meta.error && meta.touched && (
                                                <span className="text-danger">
                                                  {meta.error}
                                                </span>
                                              )}
                                            </div>
                                          )}
                                        </Field>
                                      </div>

                                      <p>Address Type</p>
                                      <div className="delivery_place margin_bottom">
                                        <div className="form-check">
                                          <Field
                                            name="addresstype"
                                            type="radio"
                                            value="Home"
                                            id="flexRadioDefault1"
                                            component={RadioInput}
                                            label="Home (All day delivery)"
                                          />
                                        </div>
                                        <div className="form-check">
                                          <Field
                                            name="addresstype"
                                            type="radio"
                                            value="Work"
                                            id="flexRadioDefault2"
                                            component={RadioInput}
                                            label="Work (Delivery between 10 AM-5 PM)"
                                          />
                                        </div>
                                      </div>
                                      <button
                                        type="submit"
                                        value="use my current location"
                                        className="addresslocation"
                                      >
                                        SAVE AND DELIVER HERE
                                      </button>
                                      <button
                                        type="cancel"
                                        value="use my current location"
                                        className="addresslocation cancel_button"
                                        onClick={() => {
                                          setFormVisible(false);
                                        }}
                                      >
                                        Cancel
                                      </button>
                                    </form>
                                  )}
                                />
                              )}
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div
                                className="addnew_address"
                                onClick={() => setFormVisible(!isFormVisible)}
                              >
                                <div>
                                  <BsPlusCircleFill className="logindetail_icon" />
                                </div>
                                <div>
                                  <p>Add New</p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* )} */}
                    </div>
                    <div className=" margin_bottom">
                      <Accordion.Item
                        eventKey={2}
                        onChange={() => handleChange()}
                      >
                        <Accordion.Header>
                          <div id="collapseOne" className="loginmain_align">
                            <div className="d-flex my-3">
                              <div className="logindetail">3</div>
                              <div className="d-flex mx-2">
                                <p>ORDER SUMMARY</p>
                              </div>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          {_id && _id !== "id" ? (
                            <>
                              <Row>
                                <Col lg={4}>
                                  <img
                                    className="subcatkitchen_image"
                                    variant="top"
                                    src={
                                      dData.thumbnail
                                        ? `http://localhost:5000/uploads/${dData.thumbnail}`
                                        : ""
                                    }
                                    alt=""
                                  />
                                </Col>
                                <Col lg={8}>
                                  <Card className="shoppingcard_bor">
                                    <Card.Body>
                                      <Card.Title>
                                        <h4>{dData.title}</h4>
                                      </Card.Title>

                                      <Card.Subtitle className="mb-2 text-muted">
                                        <h5></h5>
                                      </Card.Subtitle>
                                      <Card.Subtitle className="mb-2">
                                        <h1>₹ {dData.price}</h1>
                                      </Card.Subtitle>
                                      <Card.Text>
                                        <div className="d-flex ">
                                          <h6 className=" ">Description:</h6>
                                          <p className="mainpro_rightdescrip margin_bottom">
                                            {dData.description}
                                          </p>
                                        </div>
                                      </Card.Text>
                                      <div className="d-flex ">
                                        <h6>Highlights</h6>
                                        <div className="d-flex px-5">
                                          <ul className="specification">
                                            <td>{dData?.brand?.[0]?.brand}</td>
                                            <td>
                                              {dData?.category?.[0]?.category}
                                            </td>
                                            <td>
                                              {
                                                dData?.subcategory?.[0]
                                                  ?.subcategory
                                              }
                                            </td>
                                            <li>{dData.title}</li>
                                            <td>
                                              {dData.stock > 0 ? (
                                                <p></p>
                                              ) : (
                                                <h2 className="text-danger ">
                                                  Out of stock
                                                </h2>
                                              )}
                                            </td>
                                          </ul>
                                        </div>
                                      </div>
                                    </Card.Body>
                                  </Card>
                                </Col>
                              </Row>
                            </>
                          ) : (
                            <>
                              <Row>
                                {myCartL &&
                                  myCartL?.map((e, index) => {
                                    return (
                                      <>
                                        <Col lg={4} key={index}>
                                          <div className="margin_bottom">
                                            <img
                                              className="ordersummaryima_Ge"
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
                                        </Col>
                                        <Col lg={8} key={index}>
                                          <div className="margin_bottom">
                                            <Card className="shoppingcard_bor ">
                                              <Card.Body>
                                                <Card.Title>
                                                  <h4 className="description_title">
                                                    {
                                                      e?.productDetails[0]
                                                        ?.title
                                                    }
                                                  </h4>
                                                </Card.Title>

                                                <Card.Subtitle className="mb-2 text-muted">
                                                  <h5></h5>
                                                </Card.Subtitle>
                                                <Card.Subtitle className="mb-2">
                                                  <h4 className="py-2 mb-0">
                                                    ₹{" "}
                                                    {e?.productDetails[0]
                                                      ?.price * e?.quantity}
                                                  </h4>
                                                </Card.Subtitle>
                                                <Card.Subtitle>
                                                  {e?.productDetails[0]?.stock >
                                                  0 ? (
                                                    <p></p>
                                                  ) : (
                                                    <h2 className="text-danger ">
                                                      Out of stock
                                                    </h2>
                                                  )}
                                                </Card.Subtitle>
                                                <Card.Text>
                                                  <div className="d-flex flex-column ">
                                                    <h6 className="discription_text">
                                                      Description:
                                                    </h6>
                                                    <p className="mainpro_rightdescrip margin_bottom">
                                                      {
                                                        e?.productDetails[0]
                                                          ?.description
                                                      }
                                                    </p>
                                                  </div>
                                                </Card.Text>
                                              </Card.Body>
                                            </Card>
                                          </div>
                                        </Col>
                                      </>
                                    );
                                  })}
                              </Row>
                            </>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
                    <div className="orderconfirmationmaindiv">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="logindetail">4</div>
                        <div className="ordercon-email mx-2">
                          ORDER CONFIRMATION EMAIL <space />
                          <span>{userLogin?.userEmail}</span>
                        </div>
                      </div>
                      <div>
                        {address && (
                          <Button
                            className="paymentContinue_button"
                            onClick={(e) => handlePayment()}
                            disabled={
                              (dData?.stock ||
                                myCartL?.productDetails?.stock) === "NaN" ||
                              (dData?.stock ||
                                myCartL?.productDetails?.stock) ===
                                "out of stock"
                            }
                          >
                            Continue
                          </Button>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>
                {_id && _id !== "id" ? (
                  <>
                    <div className="rightpricedetail margin_bottom">
                      <div className="addcartpricede_tail margin_bottom ">
                        <h5>PRICE DETAIL</h5>
                      </div>
                      <div className="d-flex justify-content-between  margin_bottom">
                        <p className="totalamountright_">Price</p>
                        <p>₹{dData?.price}</p>
                      </div>
                      <div className="d-flex justify-content-between margin_bottom">
                        <p className="totalamountright_">Discount</p>
                        <span className="discountpercentage_">
                          {dData?.discountpercentage}%
                        </span>
                      </div>
                      <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                        <p className="totalamountright_">Delivery Charges</p>
                        <p>-----------</p>
                      </div>
                      <div className="d-flex justify-content-between margin_bottom addcart_delivery">
                        <h5>Total Amount</h5>
                        <p>
                          ₹
                          {dData.price -
                            (
                              (dData?.price * dData?.discountpercentage) /
                              100
                            )?.toFixed(0)}
                        </p>
                      </div>
                      <h6 className="discountpercentage_">
                        Your Will save ₹
                        {dData?.price -
                          (dData?.price -
                            (
                              (dData?.price * dData?.discountpercentage) /
                              100
                            )?.toFixed(0))}
                        on this order
                      </h6>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rightpricedetail margin_bottom">
                      <div className="addcartpricede_tail margin_bottom ">
                        <h5>PRICE DETAIL</h5>
                      </div>
                      <div className="d-flex justify-content-between  margin_bottom">
                        <p className="totalamountright_">Price</p>
                        <p>₹{getTotalPrice()}</p>
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
                      <h6 className="discountpercentage_">
                        You Will save ₹{getTotalDiscount()?.toFixed(0)} on this
                        order
                      </h6>
                    </div>
                  </>
                )}
              </Col>
            </Row>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Delieverydetail;
