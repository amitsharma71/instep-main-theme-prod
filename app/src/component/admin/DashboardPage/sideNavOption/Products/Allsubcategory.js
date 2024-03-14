import React, { useEffect, useMemo, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addsubcategory,
  removeFromSubcategory,
} from "../../../../../Redux/action/createNewSubcategoryAction";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import { allSubCategoryList } from "../../../../../Redux/action/getSubcategoryAction";
import Allpagination from "../../../Pagination/pagination";
import { MdDelete } from "react-icons/md";
import Delete from "../../../deleteModel/delete";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";
import { toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

const Allsubcategory = () => {
  const dispatch = useDispatch();

  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [loading, setLoading] = useState(false); // State to store the selected category

  const [searchQuery, setSearchQuery] = useState("");

  const [edit, setEdit] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const listCount = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.totalDocs
  );

  const getscat = useSelector(
    (state) => state?.getcategorylistdata?.listdata.data
  );
  console.log(getscat, "getscat");

  const getsubcat = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.data
  );

  const isLoading = useSelector(
    (state) => state?.getsubsategorylistdata?.isLoading
  );

  const onSubmit = (values, form) => {
    if (edit) {
      let asd = {
        subcategoryData: [
          {
            category: values.category_id,
            _id: values?._id,
            subcategory: values?.subcategory,
          },
        ],
      };
      dispatch(addsubcategory(asd)).then((res) => {
        if (res.payload.sucess) {
          dispatch(
            allSubCategoryList({
              search: searchQuery,
              page: currentPage,
              perPage: postPerPage,
            })
          );
          setEdit(null);
          toast.success("Successfuly Edited");
        }
      });
    } else {
      let asd = {
        subcategoryData: [
          {
            category_id: values.category,
            subcategory: values.subcategory,
          },
        ],
      };

      dispatch(addsubcategory(asd)).then((res) => {
        console.log(res, "fddsfdss");
        if (res.payload.sucess) {
          dispatch(
            allSubCategoryList({
              search: searchQuery,
              page: currentPage,
              perPage: postPerPage,
            })
          );
        }
        form.reset();
        setSelectedCategoryId("");
        toast.success("Successfuly added");
      });
    }
  };

  useEffect(() => {
    dispatch(allCategoryList());
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(
      allSubCategoryList({
        search: searchQuery,
        page: currentPage,
        perPage: postPerPage,
      })
    ).then((res) => {
      setLoading(false);
    });
  }, [currentPage]);

  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
    setSelectedCategoryId(selectedId);

    const selectedLabel =
      getscat.find((i) => i?._id === selectedId)?.category || "";
    setSelectedCategory(selectedLabel);
  };

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    dispatch(removeFromSubcategory({ subcategoryid: id })).then((res) => {
      if (res?.payload?.success) {
        dispatch(
          allSubCategoryList({
            search: searchQuery,
            page: currentPage,
            perPage: postPerPage,
          })
        );
      }
      handleClose();
    });
  };
  const [show, setShow] = useState(false);

  const [categoryid, setCategoryid] = useState(null);

  const handleShow = (id) => {
    setCategoryid(id);
    setShow(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e?.target?.value);
    if (e?.target?.value) {
      dispatch(allSubCategoryList({ search: e?.target?.value }));
    } else {
      dispatch(
        allSubCategoryList({
          search: "",
          page: currentPage,
          perPage: postPerPage,
        })
      );
    }
  };
  const handleEdit = (id) => {
    setEdit(id);
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const initialValues = () => {
    let initialValues = {};
    if (edit) {
      initialValues = {
        subcategory: edit?.subcategory,
        category: edit?.category_id,
        _id: edit._id,
      };
    } else {
      initialValues = {
        subcategory: "",
        category: "",
      };
    }
    return initialValues;
  };
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding">
            <Col className="Admin_dashboard" lg={12}>
              <h3> Add New Subcategory</h3>
            </Col>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Form
            onSubmit={onSubmit}
            initialValues={useMemo(() => initialValues(), [edit])}
            render={({ handleSubmit, form, submitting, pristine }) => (
              <form onSubmit={handleSubmit}>
                <div className="cat_select">
                  <div>
                    <Field name="category">
                      {({ input, meta }) => (
                        <select
                          {...input}
                          className="subcategory_drop margin_bottom"
                        >
                          <option value="">Select a category</option>
                          {getscat &&
                            getscat?.map((i) => (
                              <option name="option" key={i?._id} value={i?._id}>
                                {i?.category}
                              </option>
                            ))}
                        </select>
                      )}
                    </Field>
                  </div>
                </div>
                <div className="mb-2">
                  <Field
                    className="subcategory_drop"
                    name="subcategory"
                    component="input"
                    type="text"
                    placeholder="subcategory"
                    required
                    maxLength={30}
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
                {getsubcat && getsubcat.length > 0 ? (
                  <>
                    <Table responsive="md" className="position-relative">
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th> Subcategory Name</th>
                          <th className="d-flex justify-content-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getsubcat &&
                          getsubcat?.map((e, index) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    {(currentPage - 1) * postPerPage +
                                      (index + 1)}
                                  </td>
                                  <td>{e.subcategory}</td>
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
                              </>
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
    </>
  );
};

export default Allsubcategory;
