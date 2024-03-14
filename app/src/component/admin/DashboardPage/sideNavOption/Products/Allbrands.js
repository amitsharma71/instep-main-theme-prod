import React, { useEffect, useMemo, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addbrands,
  removeFromBrand,
  updateBrands,
} from "../../../../../Redux/action/createNewBrandsAction";
import { allSubCategoryList } from "../../../../../Redux/action/getSubcategoryAction";
import { Col, Row, Spinner, Table } from "react-bootstrap";
import { allBrandsList } from "../../../../../Redux/action/getAllBrandListAction";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";
import Allpagination from "../../../Pagination/pagination";
import { MdDelete } from "react-icons/md";
import Delete from "../../../deleteModel/delete";
import { typesubcategoryget } from "../../../../../Redux/action/typesubcatpost";
import { ToastContainer, toast } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

const Allsubcategory = () => {
  const dispatch = useDispatch();
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [typeSubCategory, SetTypeSubCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [edit, setEdit] = useState();

  const getAllTypeSub = useSelector(
    (State) => State?.typesubcategory?.listdata.data
  );
  console.log(getAllTypeSub, "dddddddddfd");
  const getcategorylist = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );

  const listCount = useSelector(
    (state) => state?.getbrandslistdata?.listdata?.totalDocs
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const typesubcatgory = useSelector(
    (state) => state?.typesubcategory?.typesublist?.data?.data
  );
  console.log(getcategorylist, "sherowali");

  const getsubcat = useSelector(
    (state) => state?.getsubsategorylistdata?.listdata?.data
  );
  console.log(getsubcat, "zzz");

  const getbrandlist = useSelector(
    (state) => state?.getbrandslistdata?.listdata?.data
  );
  const isLoading = useSelector((state) => state?.getbrandslistdata?.isLoading);
  console.log(getbrandlist, "1111");

  const onSubmit = (values, form) => {
    console.log(values.brand, "dddddddddddd");
    if (edit) {
      let asd = {
        category_id: selectedCategoryId,
        subcategory_id: selectedSubcategoryId,
        typesubcategory: typeSubCategory,
        brand: values.brand,
        _id: values._id,
      };

      dispatch(updateBrands(asd)).then((res) => {
        console.log(res, "fdsfdf");
        if (res.payload.success) {
          dispatch(
            allBrandsList({
              search: "",
              page: currentPage,
              perPage: postPerPage,
            })
          );
          toast.success("successful Updated");
          form.reset();
          setEdit(null);
        }
      });
    } else {
      let asd = {
        category_id: selectedCategoryId,
        subcategory_id: selectedSubcategoryId,
        typesubcategory_id: typeSubCategory,
        brand: values.brand,
      };

      dispatch(addbrands(asd)).then((res) => {
        console.log(res, "saddsadsa");
        toast.success("successful Submited");
        form.reset();

        setSelectedCategoryId("");
        setSelectedSubcategoryId("");
        SetTypeSubCategory("");
      });
    }
  };
  useEffect(() => {
    dispatch(allCategoryList());
    if (selectedCategoryId) {
      dispatch(allSubCategoryList({ category_id: selectedCategoryId }));
    }
    if (selectedSubcategoryId) {
      dispatch(typesubcategoryget({ subcategory_id: selectedSubcategoryId }));
    }
    dispatch(
      allBrandsList({
        search: "",
        page: currentPage,
        perPage: postPerPage,
      })
    );
  }, [currentPage, selectedSubcategoryId, selectedCategoryId]);

  var selectedId;
  const handleCategoryChangeCat = (e) => {
    selectedId = e.target.value;
    console.log(selectedId, "selectedcategoryId");
    setSelectedCategoryId(selectedId);
    if (selectedId) {
      dispatch(allSubCategoryList({ category_id: selectedId }));
    }
  };

  var selectedId;
  const handleCategoryChange2 = (event) => {
    selectedId = event.target.value;
    console.log(selectedId, "selectedSubcategoryId");
    setSelectedSubcategoryId(selectedId);
    if (selectedId) {
      dispatch(typesubcategoryget({ subcategory_id: event?.target?.value }));
    }
  };
  console.log(selectedSubcategoryId, "selectedSubcategoryId");

  var selectedId;
  const handleCategoryChange3 = (e) => {
    selectedId = e?.target?.value;
    SetTypeSubCategory(selectedId);
  };

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    dispatch(removeFromBrand({ _id: id })).then((res) => {
      dispatch(
        allBrandsList({
          search: "",
          page: currentPage,
          perPage: postPerPage,
        })
      );
      if (res?.data?.success) {
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
    if (e.target.value) {
      dispatch(allBrandsList({ search: e.target.value }));
    } else {
      dispatch(
        allBrandsList({ search: "", page: currentPage, perPage: postPerPage })
      );
    }
  };

  const handleEdit = (e) => {
    setEdit(e);
    setSelectedCategoryId(e.category_id);
    setSelectedSubcategoryId(e.subcategory_id);
    SetTypeSubCategory(e.type_subcategory_id);
    console.log(
      e.subcategory_id,
      e.type_subcategory_id,
      e.category_id,
      e,
      "id.subcategory_id"
    );
  };

  const initialValues = () => {
    let initialValues = {};
    if (edit) {
      initialValues = {
        brand: edit?.brand,
        category: edit?.category_id,
        subcategory: edit?.subcategory_id,
        typesubcategory: edit?.type_subcategory_id,
        _id: edit?._id,
      };
    } else {
      initialValues = {
        brand: "",
        category: "",
        subcategory: "",
        typesubcategory: "",
        _id: "",
      };
    }

    console.log(initialValues, "fadfdasfds");
    return initialValues;
  };
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="admin_toppadding">
            <Col className="Admin_dashboard" lg={12}>
              <h3> Add New Brands</h3>
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
                <div>
                  <Field name="category">
                    {({ input, meta }) => (
                      <select
                        {...input}
                        className="subcategory_drop margin_bottom"
                        // onChange={handleCategoryChangeCat}
                        // value={selectedCategoryId}
                        onChange={(e) => {
                          input.onChange(e);
                          handleCategoryChangeCat(e);
                        }}
                      >
                        <option value="">Select Category</option>
                        {getcategorylist &&
                          getcategorylist?.map((e) => (
                            <option key={e?._id} value={e?._id}>
                              {e?.category}
                            </option>
                          ))}
                      </select>
                    )}
                  </Field>
                  <Field name="subcategory">
                    {({ input, meta }) => (
                      <select
                        {...input}
                        className="subcategory_drop margin_bottom"
                        // onChange={handleCategoryChange2}
                        // value={selectedSubcategoryId}
                        onChange={(e) => {
                          input.onChange(e);
                          handleCategoryChange2(e);
                        }}
                      >
                        <option value="">Select a Subcategory</option>
                        {getsubcat?.map((i) => (
                          <option key={i?._id} value={i?._id}>
                            {i?.subcategory}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                  <Field name="typesubcategory">
                    {({ input, meta }) => (
                      <select
                        {...input}
                        className="subcategory_drop margin_bottom"
                        // onChange={handleCategoryChange3}
                        // value={typeSubCategory}
                        onChange={(e) => {
                          input.onChange(e);
                          handleCategoryChange3(e);
                        }}
                      >
                        <option value="">Select a typesubcategory</option>
                        {typesubcatgory?.map((i) => (
                          <option key={i?._id} value={i?._id}>
                            {i?.typesubcategory}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>
                  <div className="mb-2">
                    <Field
                      className="subcategory_drop"
                      name="brand"
                      component="input"
                      type="text"
                      placeholder="brand"
                      required
                      maxLength={30}
                    />
                  </div>
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
                  // onKeyDown={onKeyDownHandler}
                  onChange={(e) => handleSearch(e)}
                />
              </div>
              {/* <div className="btngroup">
                <Button className="select_button " type="submit" onClick={handleSearch}>
                  <AiOutlineSearch /> search
                </Button>
              </div> */}
            </div>
            {isLoading ? (
              <div className="table_Spinner">
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
              <>
                {getbrandlist && getbrandlist.length > 0 ? (
                  <>
                    <Table responsive="md">
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th> Brand Name</th>
                          <th className="d-flex justify-content-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getbrandlist &&
                          getbrandlist?.map((e, index) => {
                            console.log(e, "brnds");
                            return (
                              <>
                                <tr>
                                  <td>
                                    {(currentPage - 1) * postPerPage +
                                      (index + 1)}
                                  </td>
                                  <td>{e.brand}</td>
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
                          <th> Brand Name</th>
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

            {searchQuery && searchQuery.length !== 10 ? (
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
      <ToastContainer />
    </>
  );
};
export default Allsubcategory;
