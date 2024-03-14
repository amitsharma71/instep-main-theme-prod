import React, { useEffect, useMemo, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addcategory,
  editCatgory,
  removeFromCategory,
} from "../../../../../Redux/action/createNewCategoryAction";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";
import { toast } from "react-toastify";
import Allpagination from "../../../Pagination/pagination";
import Delete from "../../../deleteModel/delete";
import { FiSearch } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

const Allcategories = () => {
  const [selectedImagesforpost, setselectedImagesforpost] = useState();
  const [selectedImages, setSelectedImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [edit, setEdit] = useState();
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );

  const listCount = useSelector(
    (state) => state.getcategorylistdata?.listdata?.totalDocs
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const onSubmit = (values, form) => {
    if (edit) {
      var categoryData = new FormData();
      const payload = {
        category: values?.category,
        _id: values?._id,
      };
      if (selectedImagesforpost?.file) {
        categoryData.append("images", selectedImagesforpost.file);
      }
      categoryData.append("userData", JSON.stringify(payload));

      dispatch(editCatgory(categoryData)).then((res) => {
        if (res.payload.data.success) {
          dispatch(
            allCategoryList({
              search: "",
              page: currentPage,
              perPage: postPerPage,
            })
          );
          setEdit(null);
        }
        setSelectedImages([]);
        resetFileInput();
      });
      toast.success("Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      var formData = new FormData();
      const payload = {
        category: values?.category,
      };
      if (selectedImagesforpost?.file) {
        formData.append("images", selectedImagesforpost.file);
      } else {
        toast.error("Image is required");
      }
      formData.append("userData", JSON.stringify(payload));

      dispatch(addcategory(formData)).then((res) => {
        console.log(res, "fsfsdfsd");
        if (res.payload.data.success) {
          dispatch(
            allCategoryList({
              search: "",
              page: currentPage,
              perPage: postPerPage,
            })
          );
          form.reset();
          setSelectedImages("");
          resetFileInput();
        }
      });
      toast.success("Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
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
  const isLoading = useSelector(
    (state) => state?.getcategorylistdata?.isLoading
  );

  useEffect(() => {
    dispatch(
      allCategoryList({
        search: "",
        page: currentPage,
        perPage: postPerPage,
      })
    );
  }, [currentPage]);

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
      setSelectedImages([]);
      e.target.value = null;
      return false;
    }
    // size
    const maxSizeKB = 50;
    if (image.size > maxSizeKB * 1024) {
      toast.error("the maximum file size allowed (50KB).");
      setSelectedImages([]);
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
          setSelectedImages([imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    dispatch(removeFromCategory({ categoryid: id })).then((res) => {
      if (res?.payload?.data?.success) {
        dispatch(
          allCategoryList({
            search: "",
            page: currentPage,
            perPage: postPerPage,
          })
        );
      }
      handleClose();
      toast.warning("Successfully Deleted !", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  };

  const [show, setShow] = useState(false);

  const [categoryid, setCategoryid] = useState(null);

  const handleShow = (id) => {
    setCategoryid(id);
    setShow(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value, "fdhfaudhafu");
    if (e.target.value) {
      dispatch(allCategoryList({ search: e.target.value }));
    } else {
      dispatch(
        allCategoryList({ search: "", page: currentPage, perPage: postPerPage })
      );
    }
  };

  const handleEdit = (e) => {
    setEdit(e);
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const initialValues = () => {
    let initialValues = {};
    if (edit) {
      initialValues = { category: edit.category, _id: edit?._id };
    } else {
      initialValues = { category: "", _id: "" };
    }
    console.log(initialValues, "gyhdhttgchg");
    return initialValues;
  };
  return (
    <>
      <Row>
        <div className="admin_toppadding">
          <Col className="Admin_dashboard" lg={12}>
            <h3> Categories</h3>
          </Col>
        </div>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new margin_bottom">
            <div className="leftcategory_add">
              <Form
                onSubmit={(values, form) => onSubmit(values, form)}
                initialValues={useMemo(() => initialValues(), [edit])}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  valuess,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="category_item ">
                      <Field
                        className="ctegorysearc_h margin_bottom"
                        name="category"
                        component="input"
                        type="text"
                        placeholder="category"
                        required
                        maxLength={40}
                      />
                      <div className="buttons"></div>
                    </div>
                    <div className="">
                      <h4>Upload image</h4>
                      <div>
                        <input
                          name="images"
                          type="file"
                          className="form-control signup_form_input margin_bottom"
                          onChange={handleImgeFile}
                        />
                        {selectedImages?.length > 0 ? (
                          <div>
                            <h2>Selected Images:</h2>
                            <ul className="row">
                              {selectedImages?.map((imageUrl, index) => (
                                <li
                                  key={index}
                                  className=" productupload_item col-md-3"
                                >
                                  <img
                                    className="categorygetimage"
                                    src={imageUrl}
                                    alt={`Image ${index}`}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          edit && (
                            <ul className="row">
                              <li className=" productupload_item col-md-3">
                                <img
                                  className="categorygetimage"
                                  src={`http://localhost:5000/categoryimg/${edit?.images}`}
                                  crossOrigin="anonymous"
                                  alt=""
                                />
                              </li>
                            </ul>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="d-flex justify-content-end margin_bottom">
                        {!selectedImagesforpost && !edit ? (
                          <button
                            type="submit"
                            className="addcatsubit_button"
                            disabled
                          >
                            Submit{" "}
                          </button>
                        ) : (
                          <button type="submit" className="addcatsubit_button">
                            Update
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
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new">
            <div className="form_control_or_btngroup">
              <div className="all_product_search ">
                <FiSearch className="allproduct_searchicon " />
                <input
                  type="search"
                  className=" mr-sm-2 adminsearch_bar"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e)}
                />
              </div>
            </div>
            {isLoading ? (
              <div className="table_Spinner">
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
              <>
                {data && data.length > 0 ? (
                  <>
                    <Table responsive="md">
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th> Category Name</th>
                          <th>Image</th>
                          <th className="d-flex justify-content-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data?.map((e, index) => {
                            console.log(e, "fiorjei");
                            return (
                              <tr>
                                <td>
                                  {(currentPage - 1) * postPerPage +
                                    (index + 1)}
                                </td>
                                <td>{e.category}</td>
                                <td>
                                  <img
                                    className="tableget_image"
                                    src={`http://localhost:5000/categoryimg/${e?.images}`}
                                    crossOrigin="anonymous"
                                  />
                                </td>
                                <td>
                                  <div className="d-flex justify-content-end">
                                    <CiEdit
                                      className="editic_on"
                                      onClick={() => {
                                        handleEdit(e);
                                      }}
                                    />
                                    <MdDelete
                                      className="deleteicn_forpro"
                                      onClick={() => {
                                        handleShow(e?._id);
                                      }}
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  </>
                ) : (
                  <>
                    <Table>
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th> Category Name</th>
                          <th>Image</th>
                          <th className="d-flex justify-content-end">Action</th>
                        </tr>
                      </thead>
                    </Table>
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="">Result not found</div>
                    </div>
                  </>
                )}
              </>
            )}
            {searchQuery && searchQuery?.length !== 10 ? (
              <div className="d-flex justify-content-end"></div>
            ) : (
              <div className="d-flex justify-content-end">
                <Allpagination
                  currentPage={currentPage}
                  postPerPage={postPerPage}
                  setPostPerPage={setPostPerPage}
                  setCurrentPage={setCurrentPage}
                  listCount={listCount}
                />
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Delete
        handleDelete={handleDelete}
        handleClose={handleClose}
        show={show}
        categoryId={categoryid}
      />
    </>
  );
};

export default Allcategories;
