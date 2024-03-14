import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
  Button,
  Col,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
// import Subcaregoryfilter from "./SubcaregoryMobilefilter";
// import SubCategoryfilter from "./subCategoryfilter";
import { BsFillHeartFill } from "react-icons/bs";
import Spinner from "../loader/spinner";
import {
  wishlistget,
  wishlistremove,
} from "../../../Redux/action/wishlistAction";
import { getUserId } from "../../../utils/auth";
import { MdDelete } from "react-icons/md";

const Wishlistinform = () => {
  const dispatch = useDispatch();
  const userData = getUserId();

  console.log(userData, "userData");

  const datas = useSelector(
    (state) => state?.getwishlisdData?.listdata?.data?.data
  );

  useEffect(
    (e) => {
      if (userData?.id) {
        dispatch(wishlistget({ userId: userData?.id }));
      }
    },
    [userData?.id]
  );

  const handleRemoveWish = (productId) => {
    console.log(productId, "productId");
    // if (!deleteID) return;
    dispatch(
      wishlistremove({ userId: userData?.id, itemId: productId.items })
    ).then((res) => {
      if (res) {
        // setDeleteID(null);
        dispatch(wishlistget({ userId: userData?.id }));
        handleClose(false);
      }
    });
  };

  const [show, setShow] = useState(null);
  // const [deleteID, setDeleteID] = useState(null);
  const handleShow = (id) => setShow(id);
  const handleClose = () => setShow(null);

  console.log(datas, "asdasdasdasdasd");

  return (
    <>
      {datas && datas?.items?.length > 0 ? (
        <>
          <div className="container slider_col">
            <Row>
              {datas?.map((item) => {
                if (item && item?.products?.length > 0) {
                  return (
                    <>
                      <div className="subcatkitechenmaindiv row margin_bottom">
                        <Col lg={2} md={4} sm={4}>
                          <div className="d-flex justify-content-end mt-2 mx-2">
                            <BsFillHeartFill
                              style={{ color: "#FF0000" }}
                              // onClick={() => handleWishlistClick(item?._id)}
                            />
                          </div>
                          <Link
                            className="carddecorationnone_cat text_edit"
                            reloadDocumen={true}
                            to={`/productdetail/${item?.products[0]?._id}`}
                          >
                            <div>
                              <img
                                className="wishimage"
                                variant="top"
                                // src={item?.image || item?.thumbnail}
                                src={
                                  item.products[0]?.image
                                    ? item.products[0]?.image
                                    : item.products[0]?.thumbnail?.split(":")
                                        ?.length > 1
                                    ? item.products[0]?.thumbnail
                                    : `http://localhost:5000/uploads/${item?.products[0]?.thumbnail}`
                                }
                                alt=""
                              />
                            </div>
                          </Link>
                          <Link
                            className="carddecorationnone_cat text_edit"
                            reloadDocumen={true}
                            to={`/productdetail/${item?.products[0]?._id}`}
                          >
                            <div>
                              <img
                                className="wishimage"
                                variant="top"
                                // src={item?.image || item?.thumbnail}
                                src={
                                  item.products[0]?.image
                                    ? item.products[0]?.image
                                    : item.products[0]?.thumbnail?.split(":")
                                        ?.length > 1
                                    ? item.products[0]?.thumbnail
                                    : `http://localhost:5000/uploads/${item?.products[0]?.thumbnail}`
                                }
                                alt=""
                              />
                            </div>
                          </Link>
                        </Col>
                        <Col lg={6} md={5} sm={5}>
                          <Link
                            className="carddecorationnone_cat text_edit"
                            reloadDocumen={true}
                            to={`/productdetail/${item?.products[0]?._id}`}
                          >
                            <div className="p-4">
                              <div className="subcatitem_cont">
                                {" "}
                                {item?.products[0]?.title}
                              </div>
                              <div className="descripmob crad_text">
                                {" "}
                                {item?.products[0]?.description}
                              </div>
                              <div className="kit_homestarticon">
                                {item?.products[0]?.rating}
                              </div>
                            </div>
                          </Link>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <div className="p-4">
                            <h5> ₹{item?.products[0]?.price}</h5>
                          </div>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <div className="p-4">
                            <h5> ₹{item?.products[0]?.price}</h5>
                          </div>
                        </Col>
                        <Col lg={2} md={3} sm={3}>
                          <OverlayTrigger
                            className=""
                            key={"top"}
                            placement={"top"}
                            overlay={
                              <Tooltip id={`tooltip-top`}>Delete</Tooltip>
                            }
                          >
                            <div className="mt-4 d-flex align-items-center justify-content-center">
                              <MdDelete
                                className="wishremoveicon"
                                onClick={() => {
                                  handleShow(item?.products[0]?._id);
                                  // setDeleteID(item?.products[0]?._id);
                                }}
                              />
                            </div>
                          </OverlayTrigger>
                        </Col>
                      </div>
                      {show === item?.products[0]?._id && (
                        <Modal
                          className="removerfromcart_modal"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                          show={show ? true : false}
                          onHide={handleClose}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Delete Item</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to Delete this item ?
                            {/* {item?.products[0]?.title} */}
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
                              onClick={() => handleRemoveWish(item)}
                            >
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      )}
                    </>
                  );
                }
              })}
            </Row>
          </div>
        </>
      ) : (
        <div className="Empty_wishlist">
          <FaHandHoldingHeart className="Emptywishlist" />
          <h1>It's empty here</h1>
          <p>Follow collections you love to find them here</p>
        </div>
      )}
    </>
  );
};

export default Wishlistinform;
