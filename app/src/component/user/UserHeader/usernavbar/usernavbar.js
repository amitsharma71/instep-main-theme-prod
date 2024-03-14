import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Accordion, Col, Image, Row } from "react-bootstrap";
import { React, useEffect, useState } from "react";
import {getProductAction,
  myCartList
} from "../../../../Redux/action/getProductDetailAction";
import { getUserId } from "../../../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiTwotoneHeart } from "react-icons/ai";
import { BiLogOut, BiSearch, BiSolidPurchaseTag } from "react-icons/bi";
import { MdAccountCircle, MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { searchAction } from "../../../../Redux/action/searchProductAction";
import { allCategoryList } from "../../../../Redux/action/getCategoryAction";
import { cartinfo } from "../../../../Redux/action/usercartinfo";
import { admingetheading } from "../../../../Redux/action/adminheader";
import { CiLight } from "react-icons/ci";
import { AllFilterationData } from "../../../../Redux/action/allFilterationAction";

const Usernavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const userData = getUserId();
  console.log(userData);

  const userLogin = localStorage.getItem("token");

  const header = useSelector(
    (state) => state?.adminheading?.listdata?.data?.data
  );
  console.log(header, "header");

  useEffect(() => {
    dispatch(admingetheading({ adminID: "64b8ccde661f313c3be26a41" }));

    if (userData?.id) {
      dispatch(myCartList({ userid: userData.id }));
    }
  }, [userData?.id]);

  const SignClick = (e) => {
    navigate("/signin");
  };

  const logoutClick = () => {
    localStorage.clear();
    window.location = window.location.origin;
    // navigate("/");
  };

  const filterdata = useSelector(
    (state) => state?.filtercategoryData?.listdata
  );

  console.log(filterdata, "filterdatafilterdata");

  useEffect(() => {
    // dispatch(filterByCategory());
    if (userData && userData.id) {
      dispatch(cartinfo({ userid: userData.id })).then((res) => {
        console.log("TRIGGERED", res);
      });
    }
    dispatch(getProductAction());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlehome = () => {
    navigate("/");
    setShow(false);
  };
  const handlecategory = (e) => {
    navigate(`/category/${e._id}`);
    setShow(false);
  };

  const handleProducts = () => {
    navigate("/allproduct");
    setShow(false);
  };
  const handleAboutUs = () => {
    navigate("/aboutus");
    setShow(false);
  };
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  const handleSearch = (item) => {
    dispatch(searchAction({ name: searchQuery }));
    navigate("/search");
    setSearchQuery("");
    console.log(item, "itemitem");
  };
  console.log(handleSearch, "handleSearchs");
  const myCartL = useSelector((state) => state?.cartdetails?.listdata);
  console.log(myCartL, "dddddddddddddddd");

  const navcategorydata = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );

  console.log(navcategorydata, "assssssssssasa");

  useEffect(() => {
    dispatch(allCategoryList());
  }, []);

  const productClicks = (categoryId) => {
    console.log(categoryId, "ffffffffffg");
    // `/category/${subcategoryid}`
    dispatch(AllFilterationData({ categoryId: categoryId }));
  };

  return (
    <>
      <div className="nav_header">
        <div className="navbaenew_top">
          <div className="container">
            <Row>
              <Col lg={12}>
                <div className="subnewbar_nav">
                  <div className="intcrt">
                    <p> {header && header.heading}</p>
                  </div>
                  {/* <div className="intcrt">
                    <AiOutlineMail />
                    {header && header.Email}
                  </div> */}
                  {/* <i class="fas fa-divide    ">{header && header.sitename}</i> */}
                  <div className="onmobiled-show">
                    <Link to="/" className="card_deco">
                      {console.log(
                        header?.logo?.split("-")[1],
                        "asdasdq234234324"
                      )}
                      <img
                        src={`http://localhost:5000/logo/${header?.logo}`}
                        alt=""
                        style={{ width: "92px" }}
                      />
                    </Link>
                  </div>
                  <div className="subnewbar_content">
                      <div className="navbarhead_prop">
                        <Navbar.Brand>
                          <Link to="/" className="card_deco">
                            {console.log(
                              header?.logo?.split("-")[1],
                              "asdasdq234234324"
                            )}
                            <img
                              src={`http://localhost:5000/logo/${header?.logo}`}
                              alt=""
                              style={{ width: "92px" }}
                            />
                          </Link>
                        </Navbar.Brand>
                      </div>
                    <div className="alignsearchbar_icon hideonmscree">
                      <input
                        className="navsearch_input"
                        placeholder="search"
                        value={searchQuery}
                        onKeyDown={onKeyDownHandler}
                        onChange={(e) => setSearchQuery(e?.target?.value)}
                      />
                      <div>
                        <BiSearch
                          className="seachunder_search_icon"
                          onClick={handleSearch}
                        />
                      </div>
                    </div>
                    <div className="subnewbar_rightcont">
                      <div className="mid_navnewconent desktop_mid_navnewconent">
                        {/* <div className="Nav_link">
                          Category
                          <div className="nav_Filter nav_filterchanges">
                            <ul>
                              <Row>
                                {navcategorydata &&
                                  navcategorydata?.map((item, index) => {
                                    const categoryId = item?._id;
                                    return (
                                      <Col
                                        md={6}
                                        className="navfilter_colalign"
                                      >
                                        <Link
                                          className="navcat_deco"
                                          // to={`/category/${item?._id}`}
                                          to={`/category/${categoryId}`}
                                          onClick={() =>
                                            productClicks(categoryId)
                                          }
                                        >
                                          <li key={index}>{item?.category}</li>
                                        </Link>
                                      </Col>
                                    );
                                  })}
                              </Row>
                            </ul>
                          </div>
                        </div> */}
                        {/* <Link
                          className="Nav_link carddecorationnone_cat"
                          to="/"
                        >
                          Home
                        </Link> */}
                        <Link
                          className="Nav_link carddecorationnone_cat"
                          to="/allproduct"
                        >
                          Products
                        </Link>
                      </div>
                      <div className="Nav_link hideoncscreen">
                        <BiSearch className="navbar_new_icon" />
                        <div className="nav_Filter navsearch_alignnew">
                          <ul>
                            <div className="alignsearchbar_icon">
                              <li>
                                <input
                                  className="navsearch_input"
                                  placeholder="search"
                                  value={searchQuery}
                                  onKeyDown={onKeyDownHandler}
                                  onChange={(e) =>
                                    setSearchQuery(e?.target?.value)
                                  }
                                />
                              </li>
                              <div>
                                <BiSearch
                                  className="seachunder_search_icon"
                                  onClick={handleSearch}
                                />
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                      <div className="Nav_link">
                        <MdAccountCircle className="navbar_new_icon" />
                        {userData && userLogin ? (
                          <div className="nav_Filter myprofile_align">
                            <ul>
                              <li>
                                <Link
                                  className=" carddecorationnone_cat color"
                                  to="/profile"
                                >
                                  <MdOutlineAccountCircle className="usericons" />
                                  {userData.username}
                                </Link>
                              </li>
                              <li className="sign_hover">
                                <Link
                                  className=" carddecorationnone_cat color"
                                  to="/profile"
                                >
                                  <BiSolidPurchaseTag className="usericons" />
                                  My Orders
                                </Link>
                              </li>
                              <li className="sign_hover">
                                <Link
                                  className=" carddecorationnone_cat color"
                                  to="/wishlist"
                                >
                                  <AiTwotoneHeart className="usericons" /> My
                                  Wishlist
                                </Link>
                              </li>
                              <li
                                onClick={() => logoutClick()}
                                className="sign_hover"
                              >
                                <BiLogOut className="usericons" /> Logout
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <div className="nav_Filter myprofile_align">
                            <ul>
                              <li
                                onClick={() => SignClick()}
                                className="sign_hover"
                              >
                                {/* <AiTwotoneHeart /> */}
                                Sign In
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="Nav_link">
                        {userData && userLogin ? (
                          <Link to="/addtocart">
                            <HiOutlineShoppingCart className="navbar_new_icon" />
                            <span className="navbar_new_icon_length">
                              {console.log(myCartL, "TRIGGERED")}
                              {myCartL?.length > 0 ? myCartL?.length : 0}
                            </span>
                          </Link>
                        ) : (
                          <Link to="/signin">
                            <HiOutlineShoppingCart className="navbar_new_icon" />
                            <span className="navbar_new_icon_length"></span>
                          </Link>
                        )}
                      </div>
                      <Button
                        className="usernav_toggle"
                        onClick={handleShow}
                      >
                        <svg
                          class="gb_i"
                          focusable="false"
                          viewBox="0 0 24 24"
                          width="50px"
                        >
                          <path
                            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="accord_align">
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>INSTEPCART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="usernav_canvascontent">
                      <div className="aboutus_toggle">
                        <h4>About Us </h4>
                        <p>
                          At [INSTEP], we are more than just an online store -
                          we are a destination for quality products, seamless
                          shopping experiences, and exceptional customer
                          service. Our journey began with a passion for bringing
                          convenience and choice to your fingertips, and we have
                          grown into a platform that caters to all your needs,
                          wants, and desires.
                        </p>
                        <Link to="/aboutus">
                          <Button
                            onClick={handleAboutUs}
                            className="slider_rightbutton"
                            variant="light"
                          >
                            About Us
                          </Button>
                        </Link>
                        <ul className="">
                          <h5 className=""> Mail Us:</h5>
                          <p>
                            instepcart@mail.com <br />
                          </p>
                        </ul>
                        <ul>
                          <h5> Registered Office Address:</h5>
                          <a
                            href="https://www.google.com/maps/place/InStep+Technologies+Private+Limited/@30.6603992,76.8579138,17z/data=!3m1!4b1!4m6!3m5!1s0x390f93449bb5d4b3:0x914dd5a1fe28cc76!8m2!3d30.6603946!4d76.8604887!16s%2Fg%2F11csqwp2_w?entry=ttu"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <p>
                              Tricity Plaza, Office No. 14
                              <br />
                              Ground, Peer Muchalla <br />
                              Zirakpur, Punjab 140603
                            </p>
                          </a>
                          <p className="tele">
                            Telephone: <span>000-000-0000</span>
                          </p>
                        </ul>
                      </div>
                      <div className="mid_navnewconent mid_offcanvas mobile_mid_navnewconent">
                        <div className="Nav_link">
                          <Accordion defaultActiveKey={[""]} alwaysOpen>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>Category</Accordion.Header>
                              <Accordion.Body>
                                {navcategorydata &&
                                  navcategorydata?.map((e) => {
                                    return (
                                      <>
                                        <div
                                          className="navcat_deco"
                                          onClick={() => handlecategory(e)}
                                        >
                                          <div
                                            className="mb-2 sign_hover"
                                            key={e}
                                          >
                                            {e?.category}
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <div className="nav_Filter">
                            <ul>
                              <li>ef</li>
                            </ul>
                          </div>
                        </div>
                        <div className="">
                          <div
                            onClick={handlehome}
                            className="Nav_link carddecorationnone_cat"
                          >
                            Home
                          </div>
                        </div>
                        <div className="">
                          <div
                            onClick={handleProducts}
                            className="Nav_link carddecorationnone_cat"
                          >
                            Products
                          </div>
                        </div>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default Usernavbar;
