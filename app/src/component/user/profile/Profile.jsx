import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import {
  AiFillMessage,
  AiOutlineHome,
  AiOutlineShopping,
  AiTwotoneHeart,
} from "react-icons/ai";
import { FcProcess } from "react-icons/fc";
import {
  MdAccountCircle,
  MdDelete,
  MdShoppingCartCheckout,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartinfo } from "../../../Redux/action/usercartinfo";
import { RxBorderWidth, RxDashboard } from "react-icons/rx";
import {
  BsArrowLeft,
  BsTelephoneFill,
  BsTruck,
  BsWalletFill,
} from "react-icons/bs";
import { CiEdit, CiLocationOn } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { getUserId, isUserLogined } from "../../../utils/auth";
import Editprofile from "../Editprofile/editprofile";
import TrackOrder from "../Editprofile/trackOrder";
import { useNavigate } from "react-router-dom";
import AddressBook from "../Editprofile/addressbook";
import { Getorderdetail } from "../../../Redux/action/orderSummary";
import {
  createprofile,
  deleteProfileImage,
  getProfileImage,
} from "../../../Redux/action/profileaction";
import { toast } from "react-toastify";
import Wishlistinform from "../wshlistData/wishlistDataInfo";
import { FaCamera } from "react-icons/fa6";

export default function Profile() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [imgState, setImageState] = useState([]);
  const [userName, setUsserName] = useState("");
  const [edit, setEdit] = useState(false);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const userData = getUserId();
  console.log(userData, "usr");
  const idata = userData.id;
  console.log(idata, "daa");
  const userLogin = localStorage.getItem("token");

  const handleToggleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileImage({ id: getUserId().id })).then((res) => {
      if (res?.payload?.data?.data?.username) {
        setUsserName(res?.payload?.data?.data?.username);
      }
    });
    dispatch(cartinfo({ userid: getUserId() }));
    dispatch(Getorderdetail({ userid: idata }));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    handleClose();
    window.location.reload();
  };

  const orderdetail = useSelector(
    (state) => state?.getallorderdetail?.listdata?.data?.ordersWithProducts
  );
  console.log(orderdetail?.length, "orderdetailorderdetail");

  const userinfo = useSelector((state) => state?.cartdetails?.listdata);
  console.log(userinfo, "ordersss");

  const cartdata = useSelector(
    (state) => state?.cartdetails?.listdata?.data?.userProductDetails
  );

  const profilegetdata = useSelector(
    (state) => state?.profileslice?.imageData?.data?.data
  );
  console.log(profilegetdata, "h");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const files = e.target.files;
    const image = e.target.files[0];
    const formData = new FormData();
    const imagesArray = [];

    formData.append("userData", JSON.stringify({ id: getUserId().id }));

    if (!image.name.match(/\.(jpg|jpeg|png)$/)) {
      toast.error("upload file in the form of jpg, jpeg or png");
      setImageState([]);
      e.target.value = null;
      return false;
    }
    const maxSizeKB = 50;
    if (image.size > maxSizeKB * 1024) {
      toast.error("the maximum file size allowed (50KB)");
      setImageState([]);
      e.target.value = null;
      return false;
    }
    for (let i = 0; i < files.length; i++) {
      const uniqueId = Date.now();
      const name = files[i].name;
      const filename = uniqueId + "_" + name;

      formData.append(`profileimg`, files[i], filename); // Append each file
      const reader = new FileReader();

      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setImageState(imagesArray); // Set image state when all files are read
        }
      };

      reader.readAsDataURL(files[i]);
    }

    dispatch(createprofile(formData)).then((res) => {
      if (res?.payload?.status) {
        dispatch(getProfileImage({ id: getUserId().id }));
        setImageState([]); // Clear image state after successful upload
        setIsMenuVisible(!isMenuVisible);
      }
    });
  };

  const handleDelteProfile = () => {
    dispatch(deleteProfileImage({ id: getUserId().id })).then((res) => {
      if (res) {
        setIsMenuVisible(!isMenuVisible);
        dispatch(getProfileImage({ id: getUserId().id }));
        handleClose(false);
      }
    });
  };

  const imgFound = async (img) => {
    try {
      const response = await fetch(img);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.blob();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return error;
    }
  };

  const handleEdit = (username) => {
    setEdit(username);
  };

  const handleSave = (data) => {
    if (userName?.length < 5) {
      toast.error("User name is Required");
    } else {
      let payload = { ...data, id: profilegetdata?._id };
      var formData = new FormData();
      if (profilegetdata?._id && data) {
        formData.append("userData", JSON.stringify(payload));
        dispatch(createprofile(formData)).then((res) => {
          console.log(res, "fwoemkf");
          toast.success("Successfully Edit !", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
      }
      setEdit(false);
    }
  };

  const handelvaluse = (e) => {
    setUsserName(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      handleSave();
    }
  };

  return (
    <div className="container">
      <div className=" slider_col margin_bottom">
        <div className="recent_orders ">
          <Row>
            <Col lg={3} md={3} sm={4}>
              <div className="d-flex justify-content-center mainiconalign">
                <div className="mainiconalign">
                  {console.log(
                    imgFound(
                      `http://localhost:5000/profile/${profilegetdata?.Profileimage}`
                    ),
                    "goiwjep"
                  )}
                  {profilegetdata?.Profileimage &&
                  imgFound(
                    `http://localhost:5000/profile/${profilegetdata?.Profileimage}`
                  ) ? (
                    <>
                      <img
                        crossOrigin="anonymous"
                        className="banner-img img-edit2"
                        src={
                          profilegetdata &&
                          profilegetdata.Profileimage &&
                          `http://localhost:5000/profile/${profilegetdata.Profileimage}`
                        }
                        alt="no img found"
                      />
                    </>
                  ) : (
                    <img
                      className="banner-img img-edit2"
                      src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                      alt=""
                    />
                  )}
                </div>
                <div
                  className="iconouterdiv"
                  onClick={handleToggleClick}
                  id="show"
                >
                  <FaCamera className="profileedit" />
                </div>
              </div>
              <div className={`menu ${isMenuVisible ? "visible" : "hidden"}`}>
                <div className="optionouter_div margin_bottom">
                  <div className="editprofileoption">
                    <div>
                      <input
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        type="file"
                        id="profile-imgrr"
                        hidden
                      />
                      <label htmlFor="profile-imgrr">
                        <CiEdit className="profileedit" />
                      </label>
                    </div>
                    <div>
                      <MdDelete
                        onClick={handleShow}
                        className="wishremoveicon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={9} md={9} sm={8}>
              <Row>
                <Col lg={12} md={12}>
                  <div className="d-flex justify-content-between margin_bottom colmobile">
                    <div className="d-flex align-items-center">
                      {edit !== "username" ? (
                        <input
                          className="usernameinput"
                          type="text"
                          onKeyDown={onKeyDownHandler}
                          onChange={(e) => handelvaluse(e)}
                          value={userName}
                          maxLength={8}
                        />
                      ) : (
                        <input
                          // className="usernameinput"
                          type="text"
                          onKeyDown={onKeyDownHandler}
                          onChange={(e) => handelvaluse(e)}
                          value={userName}
                          maxLength={10}
                          style={{
                            border: "2px solid  #E3E3E3",
                            padding: "5px",
                            fontWeight: "500",
                          }}
                        />
                      )}
                      {edit !== "username" ? (
                        <>
                          <div
                            onClick={() => {
                              handleEdit("username");
                            }}
                          >
                            <CiEdit className="profileedit" />
                          </div>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              handleSave({
                                username: userName,
                              });
                            }}
                            className="usrnamesave"
                            type="submit"
                          >
                            Save
                          </button>
                        </>
                      )}
                    </div>
                    <div className="userprofile_contact">
                      <div>
                        <AiFillMessage />
                        <p>{profilegetdata && profilegetdata?.email}</p>
                      </div>
                      <div>
                        <BsTelephoneFill />
                        <p>{profilegetdata && profilegetdata?.number}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {/* <Col lg={3} md={6} sm={6} xs={6}>
                                    <div className="userhistory_icons">
                                        <AiOutlineShopping className='history_icon' />
                                        <div className='history_detail'><h3>3</h3>
                                            <p>Total Delivered</p>
                                        </div>
                                    </div>
                                </Col> */}
                <Col lg={3} md={6} sm={6} xs={6}>
                  <div className="userhistory_icons">
                    <p>Total Shipped</p>
                    <div className="history_detail">
                      <BsTruck className="historyshipped_icon" />
                      <h3>0</h3>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6} xs={6}>
                  <div className="userhistory_icons">
                    <p>Orders</p>
                    <div className="history_detail" id="v-pills-profile-tab">
                      <MdShoppingCartCheckout className="historyneworder_icon" />
                      <h3>{orderdetail?.length}</h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Row>
        <Col lg={3} md={4}>
          <div className="recent_orders ordersdival_in">
            <th>Manage My Account</th>
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
                {" "}
                <div className="d-flex justify-content-start align-items-center">
                  <MdAccountCircle className="profilemanangeicon" />
                  Edit Profile
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
                {" "}
                <div className="d-flex justify-content-start align-items-center">
                  <CiLocationOn className="profilemanangeicon" />
                  Track Order{" "}
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
                  <AiOutlineHome className="profilemanangeicon" />
                  Address Book
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
                  <AiTwotoneHeart className="profilemanangeicon" />
                  Wishlist
                </div>
              </button>
              <button
                class="nav-link"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <div
                  className="d-flex justify-content-start align-items-center"
                  onClick={handleShow}
                >
                  <BiLogOut className="profilemanangeicon" />
                  Log Out
                </div>
              </button>
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
                <Editprofile />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <TrackOrder />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <AddressBook />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-wishlist"
                role="tabpanel"
                aria-labelledby="v-pills-wishlist-tab"
              >
                <Wishlistinform />
              </div>
              {/* <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        className="removerfromcart_modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to logout from this account ?
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="cancelbut_removecart"
            variant="secondary"
            onClick={() => handleClose()}
          >
            CANCEL
          </Button>
          <Button
            className="removebut_cart"
            variant="primary"
            onClick={handleLogout}
          >
            LOGOUT
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        className="removerfromcart_modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Delete profile image?</Modal.Body>
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
              handleDelteProfile();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
