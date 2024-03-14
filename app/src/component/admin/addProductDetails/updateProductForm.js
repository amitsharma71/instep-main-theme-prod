// StaticExample.js
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  allAdminProductList,
  editProductdetail,
} from "../../../Redux/action/getAllProductListing";
import { updateProduct } from "../../../Redux/action/updateProductAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Col, Row } from "react-bootstrap";
import { BsPlusCircleDotted } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { allSubCategoryList } from "../../../Redux/action/getSubcategoryAction";

function MydModalWithGrid(props) {
  const dispatch = useDispatch();

  const [selectedImagesforpost, setselectedImagesforpost] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const single = useSelector((state) => state?.updateProductData?.listdata);
  console.log(single, "rraa");

  const list = useSelector((state) => {
    if (state?.GetAdminProductAllListData?.singledata?.products?.length > 0) {
      return state?.GetAdminProductAllListData?.singledata?.products[0];
    }
  });
  console.log(list, "listof");

  console.log(list?._id, "vaikskw");

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("userData", JSON.stringify(values));
    dispatch(updateProduct(formData)).then((res) => {
      console.log(res?.meta?.requestStatus);
      if (res?.meta?.requestStatus === "fulfilled") {
        dispatch(editProductdetail());
        toast.success("Update Successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        props.onClose(false);
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  const initialValues = {
    brand: list?.brand[0]?.brand,
    description: list?.description,
    discountpercentage: list?.discountpercentage,
    id: list?._id,
    price: list?.price,
    rating: list?.rating,
    stock: list?.stock,
    subcategory: list?.subcategory[0]?.subcategory,
    typesubcategory: list?.type_subcategory_id,
  };
  console.log(initialValues, "initialValues");
  return (
    <>
      <Modal
        className="modal-size"
        show={props.show}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Row>
            <Col className="" lg={12}>
              <h3> Update Product</h3>
            </Col>
          </Row>
        </Modal.Header>

        <Form onSubmit={handleSubmit} initialValues={initialValues}>
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <div className="left_update_product">
                    {/* <div className="update_product">
                      <label htmlFor="category">
                        <h5>Category</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="category"
                        component="select"
                        required
                      >
                        <option>Electronics</option>
                        <option>Men</option>
                        <option>Home & kitchen</option>
                        <option>Appliances</option>
                        <option>Sports & More</option>
                        <option>Women</option>
                      </Field>
                    </div> */}

                    <div className="update_product">
                      <label htmlFor="subcategory">
                        <h5>subcategory:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="subcategory"
                        component="input"
                        type="text"
                        placeholder="subcategory"
                        required
                        disabled
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="brand">
                        <h5>Brand Name:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="brand"
                        component="input"
                        type="text"
                        placeholder="Brand Name"
                        required
                        disabled
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="typesubcategory">
                        <h5>Type Subcategory</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="typesubcategory"
                        component="input"
                        type="text"
                        placeholder="Typesubcategory Name"
                        required
                        // disabled
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="price">
                        <h5>Price</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="price"
                        component="input"
                        type="number"
                        step="0.01"
                        placeholder="$"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="rating">
                        <h5>Rating:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="rating"
                        component="input"
                        type="text"
                        placeholder="Rating:"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="stock">
                        <h5>Avalaible Stocks:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="stock"
                        component="input"
                        type="text"
                        placeholder="avalaible stocks"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="discountpercentage">
                        <h5>Discount Percentage:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="discountpercentage"
                        component="input"
                        type="text"
                        placeholder="discount percentage"
                        required
                      />
                    </div>
                    <div className="update_product">
                      <label htmlFor="description">
                        <h5>description</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="description"
                        component="input"
                        type="text"
                        placeholder="description"
                        required
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div className="mainupdate_pro">
                    <div className="update_product">
                      <div className="margin_bottom">
                        <h4>Upload image</h4>
                        <div>
                          {/* {single?.images && (
                            <>
                              <div className="main_image">
                                {single?.images?.map((item, index) => {
                                  if (item) {
                                    return (
                                      <img
                                        key={index}
                                        className="subphotof_main"
                                        src={
                                          item?.split("https").length > 1
                                            ? item
                                            : `http://localhost:5000/uploads/${item}`
                                        }
                                        // onMouseEnter={() => setImageState(item)}
                                        alt=""
                                      />
                                    );
                                  }
                                })}
                              </div>
                            </>
                          )} */}
                          <input
                            name="images"
                            type="file"
                            className="form-control signup_form_input margin_bottom"
                            // onChange={handleImgeFile}
                          />
                          {/* {selectedImages?.length > 0 && ( */}
                          <div>
                            <h4>Selected Images:</h4>
                            {/* <ul className  */}
                            {/* {selectedImages?.map((imageUrl, index) => ( */}
                            {/* <li */}
                            {/* // key={index} */}
                            {/* className=" productupload_item col-md-3" */}
                            {/* > */}
                            {list?.images?.length > 0 && (
                              <>
                                <div className="position-relative">
                                  <Row>
                                    {list?.images?.map((item, index) => {
                                      // if (item) {
                                      return (
                                        <Col lg={6} md={6} sm={12} xs={6}>
                                          <div className="d-flex justify-content-end">
                                            <MdCancel className="editimagedelte" />
                                          </div>
                                          <li
                                            key={index}
                                            className=" productupload_item col-md-3"
                                          >
                                            <img
                                              key={index}
                                              className="edit_product-img mb-2"
                                              src={
                                                item?.split("https").length > 1
                                                  ? item
                                                  : `http://localhost:5000/uploads/${item}`
                                              }
                                              // onMouseEnter={() => setImageState(item)}
                                              alt=""
                                            />
                                          </li>
                                        </Col>
                                      );
                                      // }
                                    })}
                                  </Row>
                                </div>
                              </>
                            )}
                            {/* <img
                                      className="edit_product-img"
                                      // src={imageUrl}
                                      // alt={`Image ${index}`}
                                    /> */}

                            {/* <p
                                  className="cancelIcon_align"
                                  onClick={() => {
                                    deleteimage(index);
                                  }}
                                >
                                  <MdCancel className="cancelicon_addproduct" />
                                </p> */}
                            {/* </li> */}
                            {/* ))} */}
                            {/* </ul> */}
                          </div>
                          {/* )} */}
                        </div>
                      </div>
                      {/* <div>
                        <h6>Gallery</h6>
                        <div className="brand_image update_brandimage">
                          <h6>Choose brand Thumbnail</h6>
                          <BsPlusCircleDotted className="brand_img_icon" />
                        </div>
                      </div> */}
                    </div>
                    {/* <div className="update_product">
                      <label htmlFor="thumbnail">
                        <h5>Thumbnail:</h5>
                      </label>
                      <Field
                        className="descirption_box"
                        name="thumbnail"
                        component="input"
                        type="text"
                        placeholder="Thumbnail"
                        required
                      />
                      <h6>Thumbnail (592x592)</h6>
                      <div className="brand_image update_brandimage margin_bottom">
                        <h6>Choose brand Thumbnail</h6>
                        <BsPlusCircleDotted className="brand_img_icon" />
                      </div>
                    </div> */}
                    <div>
                      <h4>Upload thumbnail</h4>
                      <input
                        name="images"
                        type="file"
                        className="form-control signup_form_input"
                        // onChange={handlethumbnalfile}
                      />
                      {/* {thumbnail?.length > 0 && ( */}
                      <div>
                        <h4>Selected Images:</h4>
                        <ul className="row">
                          {/* {thumbnail?.map((imageUrl, index) => ( */}
                          <li
                            // key={index}
                            className=" productupload_item col-md-3"
                          >
                            {
                              <img
                                className="edit_product-img"
                                src={`http://localhost:5000/uploads/${list?.thumbnail}`}
                                // alt={`Image ${index}`}
                              />
                            }
                          </li>
                          {/* ))} */}
                        </ul>
                      </div>
                      {/* )} */}
                    </div>
                  </div>
                  <div className="updatebutton_div">
                    <button className="update_product_button" type="submit">
                      Update Product
                    </button>
                    {/* <ToastContainer /> */}
                  </div>
                </Col>
              </Row>
            </form>
          )}
        </Form>
        <Modal.Body className="grid-example">{props.content}</Modal.Body>
      </Modal>
    </>
  );
}

export default MydModalWithGrid;
