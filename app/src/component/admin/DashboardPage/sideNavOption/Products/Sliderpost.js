import React, { useEffect, useMemo, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  adminPostslider,
  updateSliders,
} from "../../../../../Redux/action/postSliderAction";
import { Col, Dropdown, Row } from "react-bootstrap";
import {
  adminGetSlider,
  deleteSlider,
} from "../../../../../Redux/action/getSliderAction";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { LuClipboardEdit } from "react-icons/lu";
import Delete from "../../../deleteModel/delete";

const Sliderpost = () => {
  const [selectedImagesforpost, setselectedImagesforpost] = useState();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState([]);
  const [edit, setEdit] = useState();
  const [show, setShow] = useState(false);

  const [sliderId, setSliderId] = useState(null);

  const sliderpost = useSelector((state) => state?.postsliderData?.listdata);

  const handleClose = () => setShow(false);

  const onSubmit = (values, form) => {
    if (edit) {
      const formData = new FormData();
      const payload = {
        name: values?.name,
        url: values?.url,
        _id: values?._id,
      };
      if (selectedImagesforpost?.file) {
        formData.append("sliderimg", selectedImagesforpost.file);
      }
      formData.append("sildername", JSON.stringify(payload));

      dispatch(updateSliders(formData)).then((res) => {
        console.log(res, "Responsefromdispatch");
        if (res?.payload?.data?.success) {
          dispatch(adminGetSlider());
          toast.success("Successfuly Edited");
          setSelectedImage([]);
          resetFileInput();
          setEdit(null);
        }
      });
    } else {
      const formData = new FormData();
      const payload = {
        name: values?.name,
        url: values?.url,
      };
      if (selectedImagesforpost?.file) {
        formData.append("sliderimg", selectedImagesforpost.file);
      } else {
        toast.error("Image is required");
      }

      formData.append("sildername", JSON.stringify(payload));

      // Dispatch the action with the FormData object
      dispatch(adminPostslider(formData)).then((res) => {
        console.log(res, "Responsefrreomdispatch");
        if (res.payload.data) {
          dispatch(adminGetSlider());
          toast.success("Successfuly Submited");
          form.reset("");
          setSelectedImage("");
          resetFileInput("");
        }
      });
    }
  };

  const resetFileInput = () => {
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      const newFileInput = document.createElement("input");
      newFileInput.type = "file";
      newFileInput.name = "images";
      newFileInput.className = "form-control signup_form_input margin_bottom";
      newFileInput.addEventListener("change", handleImgeFile);

      fileInput.parentNode.replaceChild(newFileInput, fileInput);
    }
  };
  const handleImgeFile = (e) => {
    console.log(e, "fasfdfdas");

    const files = e.target.files;
    const image = e.target.files[0];

    if (!files || files.length === 0) {
      console.log("Image is required");
      return false;
    }

    if (!image) {
      console.log("Image is required");
      return false;
    }

    if (!image.name.match(/\.(jpg|jpeg|png)$/)) {
      toast.error("upload file in the form of jpg, jpeg or png");
      setSelectedImage([]);
      e.target.value = null;
      return false;
    }
    // size
    const maxSizeKB = 50;
    if (image.size > maxSizeKB * 1024) {
      toast.error("the maximum file size allowed (50KB).");
      setSelectedImage([]);
      e.target.value = null;
      return false;
    }

    const uniqueId = Date.now();
    const name = e.target.files[0].name;
    const filename = uniqueId + "_" + name;

    // Create a new File object for the selected image
    const file = new File([image], filename);

    setselectedImagesforpost({ file: file });

    // Images which are uploaded
    let imagesArray = [];

    // Iterate through the selected files again to read and display them as previews
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setSelectedImage([imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };
  const dataslider = useSelector(
    (state) => state?.getsliderdata?.listdata?.data
  );
  console.log(dataslider, "sliderimgs");

  useEffect(() => {
    dispatch(adminGetSlider());
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!selectedImage) {
      errors.image = "Image is required";
    }
    return errors;
  };

  const initial = () => {
    let initialValues = {};
    if (edit) {
      initialValues = {
        name: edit.name,
        url: edit.url,
        _id: edit._id,
      };
    } else {
      initialValues = {
        name: "",
        url: "",
        _id: "",
      };
    }
    console.log(initialValues, "ffdsfsdfsd");
    return initialValues;
  };
  const handleShow = (_id) => {
    setSliderId(_id);
    setShow(true);
  };
  const handleDeleteSlider = (id) => {
    console.log(id, "gadsgadf");
    dispatch(deleteSlider({ _id: id })).then((res) => {
      console.log(res, "fdasfdsafd");
      if (res?.payload?.data?.success) {
        dispatch(adminGetSlider());
      }
    });
    handleClose();
  };

  const handleEdit = (data) => {
    console.log(data, "fafdfdsa");
    setEdit(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding ">
            <Col className="Admin_dashboard " lg={12}>
              <h3> Add Slider</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new margin_bottom">
            <Form
              onSubmit={onSubmit}
              validate={validate}
              initialValues={useMemo(() => initial(), [edit])}
              render={({ handleSubmit, submitting, values }) => (
                <form onSubmit={handleSubmit}>
                  <div className="margin_bottom">
                    <Field
                      className="subcategory_drop"
                      name="name"
                      component="input"
                      type="text"
                      placeholder="Name"
                      maxLength={10}
                    />
                  </div>
                  <div className="margin_bottom">
                    <Field
                      className="subcategory_drop"
                      name="url"
                      component="input"
                      type="text"
                      placeholder="URL"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="form-control signup_form_input margin_bottom"
                      name="image"
                      type="file"
                      accept="image/*"
                      // required
                      // value={a}
                      onChange={handleImgeFile}
                    />
                    {selectedImage?.length > 0 ? (
                      <div>
                        <h2>Selected Images:</h2>
                        <ul className="row">
                          {selectedImage &&
                            selectedImage?.map((imageUrl, index) => (
                              <li
                                key={index}
                                className=" productupload_item col-md-12"
                              >
                                <img
                                  className="slideradmin_View"
                                  src={imageUrl}
                                  alt={`Image ${index}`}
                                />
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : (
                      edit && (
                        <div className="margin_bottom">
                          <img
                            className="slideradmin_View"
                            src={`http://localhost:5000/slider/${edit?.images[0]}`}
                            alt="Second sslide"
                          />
                        </div>
                      )
                    )}
                    {/* {selectedImage && <p>Selected Image: {selectedImage.name}</p>} */}
                    <div className="d-flex justify-content-end margin_bottom">
                      {!selectedImagesforpost && !edit ? (
                        <button
                          type="submit"
                          className="addcatsubit_button"
                          disabled
                        >
                          Submit
                        </button>
                      ) : (
                        <button type="submit" className="addcatsubit_button">
                          {edit ? "Update" : "Submit"}
                        </button>
                      )}
                      {edit && (
                        <button
                          className="cancel_but-ton"
                          onClick={(e) => {
                            e.preventDefault();
                            setEdit(null);
                          }}
                        >
                          cancel
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
          <Row>
            {dataslider &&
              dataslider?.map((item, index) => {
                return (
                  <>
                    <Col lg={11} md={11} sm={11}>
                      <div className="margin_bottom">
                        <img
                          className="slideradmin_View"
                          src={`http://localhost:5000/slider/${item?.images[0]}`}
                          alt="Second sslide"
                        />
                      </div>
                    </Col>
                    <Col lg={1} md={1} sm={1}>
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <BiDotsVerticalRounded />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <button
                              className="editdeleter_button"
                              onClick={() => {
                                handleEdit(item);
                              }}
                            >
                              <CiEdit className="editic_on" />
                              Edit
                            </button>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <button
                              className="editdeleter_button"
                              onClick={() => {
                                handleShow(item?._id);
                              }}
                            >
                              <MdDelete className="deleteicn_forpro m-0" />
                              delete
                            </button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </>
                );
              })}
          </Row>
        </Col>
        <Delete
          handleDelete={handleDeleteSlider}
          handleClose={handleClose}
          show={show}
          categoryId={sliderId}
        />
      </Row>
    </>
  );
};

export default Sliderpost;
