import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import { allSubCategoryList } from "../../../../../Redux/action/getSubcategoryAction";
import {
  removeFromTypeSubcategory,
  typesubcategoryget,
  typesubcategorypost,
} from "../../../../../Redux/action/typesubcatpost";
import Allpagination from "../../../Pagination/pagination";
import { MdDelete } from "react-icons/md";
import Delete from "../../../deleteModel/delete";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

const Alltypesubcategory = () => {
  const dispatch = useDispatch();

  const [selectedsubCategoryId, setselectedsubCategoryId] = useState("");

  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(""); // State to store the selected category

  const [searchQuery, setSearchQuery] = useState("");

  const [edit, setEdit] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage, setPostPerPage] = useState(10);

  console.log(selectedCategoryId, "cdcdcd");
  const listCount = useSelector(
    (state) => state?.typesubcategory?.typesublist?.data?.totalDocs
  );

  const getscat = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );

  const getsubcate = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.data
  );

  const typesubcatgory = useSelector(
    (state) => state?.typesubcategory?.typesublist?.data?.data
  );
  const isLoading = useSelector((state) => state?.typesubcategory?.isLoading);

  useEffect(() => {
    dispatch(allCategoryList());
    if (selectedCategoryId) {
      dispatch(allSubCategoryList({ category_id: selectedCategoryId }));
    }
    dispatch(
      typesubcategoryget({
        search: "",
        page: currentPage,
        perPage: postPerPage,
      })
    );
  }, [currentPage, selectedCategoryId]);

  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
    setSelectedCategoryId(selectedId);

    const selectedLabel =
      getscat.find((i) => i._id === selectedId)?.category || "";
    setSelectedCategory(selectedLabel);
    dispatch(allSubCategoryList({ category_id: event.target.value }));
  };
  var selectedId;
  const handleCategoryChange2 = (event) => {
    selectedId = event.target.value;
    setselectedsubCategoryId(selectedId);
  };

  const onSubmittype = (value, form) => {
    if (edit) {
      let typesub = {
        category_id: selectedCategoryId,
        subcategory_id: selectedsubCategoryId,
        typesubcategory: value.typesubcategory,
        _id: value._id,
      };
      dispatch(typesubcategorypost(typesub)).then((res) => {
        if (res.payload.data.sucess) {
          dispatch(
            typesubcategoryget({
              search: "",
              page: currentPage,
              perPage: postPerPage,
            })
          );
          toast.success("Successfuly Edited");
          setEdit(null);
        }
      });
    } else {
      let typesub = {
        category_id: selectedCategoryId,
        subcategory_id: selectedsubCategoryId,
        typesubcategory: value.typesubcategory,
      };
      dispatch(typesubcategorypost(typesub)).then((res) => {
        if (res.payload.data.sucess) {
          dispatch(
            typesubcategoryget({
              search: "",
              page: currentPage,
              perPage: postPerPage,
            })
          );
        }
        toast.success("Successfuly added");
        form.reset();
        setselectedsubCategoryId("");
      });
    }
  };

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    dispatch(removeFromTypeSubcategory({ typesubcategory_id: id })).then(
      (res) => {
        if (res?.payload?.data?.success) {
          dispatch(
            typesubcategoryget({
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
      }
    );
  };

  const [show, setShow] = useState(false);

  const [categoryid, setCategoryid] = useState(null);

  const handleShow = (id) => {
    setCategoryid(id);
    setShow(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      dispatch(typesubcategoryget({ search: e.target.value }));
    } else {
      dispatch(
        typesubcategoryget({
          search: "",
          page: currentPage,
          perPage: postPerPage,
        })
      );
    }
  };

  const handleEdit = (e) => {
    setEdit(e);
    setSelectedCategoryId(e.category_id);
    setselectedsubCategoryId(e.subcategory_id);
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const initialValues = () => {
    let initialValues = {};
    if (edit) {
      initialValues = {
        category: edit.category_id,
        subcategory: edit?.subcategory_id,
        typesubcategory: edit?.typesubcategory,
        _id: edit._id,
      };
    } else {
      initialValues = {
        subcategory: "",
        category: "",
        typesubcategory: "",
        _id: "",
      };
    }
    return initialValues;
  };

  return (
    <div>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding ">
            <Col className="Admin_dashboard " lg={12}>
              <h3> Add New TypeSubcategory</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Form
            onSubmit={onSubmittype}
            initialValues={useMemo(() => initialValues(), [edit])}
            render={({ handleSubmit, values, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <div className="cat_select">
                  <div>
                    <Field name="category">
                      {({ input, meta }) => (
                        <select
                          {...input}
                          className="subcategory_drop margin_bottom"
                          onChange={(e) => {
                            input.onChange(e);
                            handleCategoryChange(e);
                          }}
                        >
                          <option value="">Select a category</option>
                          {getscat?.map((i) => (
                            <option name="option" key={i._id} value={i._id}>
                              {i.category}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                  </div>
                </div>
                <div className="cat_select">
                  <Field name="subcategory">
                    {({ input, meta }) => (
                      <div>
                        <select
                          {...input}
                          className="subcategory_drop margin_bottom"
                          onChange={(e) => {
                            input.onChange(e);
                            handleCategoryChange2(e);
                          }}
                        >
                          <option value="">Select a subcategory</option>
                          {getsubcate?.map((i) => (
                            <option name="option" key={i._id} value={i._id}>
                              {console.log(i._id, values, "jhgfdsdfg")}
                              {i.subcategory}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </Field>
                </div>
                <div className="mb-2">
                  <Field
                    className="subcategory_drop"
                    name="typesubcategory"
                    component="input"
                    type="text"
                    placeholder="typesubcategory"
                    required
                    maxLength={40}
                  />
                </div>
                <div className="d-flex justify-content-end margin_bottom">
                  <button type="submit" className="addcatsubit_button">
                    {edit ? "Update" : "Submit"}
                  </button>
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
              </form>
            )}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new margin_bottom">
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
                {typesubcatgory && typesubcatgory.length > 0 ? (
                  <>
                    <Table responsive="md">
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th> Subcategory Name</th>
                          <th className="d-flex justify-content-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {typesubcatgory.map((e, index) => (
                          <tr key={index}>
                            <td>
                              {(currentPage - 1) * postPerPage + (index + 1)}
                            </td>
                            <td>{e.typesubcategory}</td>
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
                        ))}
                      </tbody>
                    </Table>
                  </>
                ) : (
                  <>
                    <Table>
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th> Subcategory Name</th>
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
      {show && (
        <Delete
          handleDelete={handleDelete}
          handleClose={handleClose}
          show={show}
          categoryId={categoryid}
        />
      )}
    </div>
  );
};

export default Alltypesubcategory;
