import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Spinner, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MydModalWithGrid from "../../../addProductDetails/updateProductForm";
import ConfirmationModal from "../../../addProductDetails/confirmModel";
import {
  allAdminProductList,
  editProductdetail,
} from "../../../../../Redux/action/getAllProductListing";
import { deleteProduct } from "../../../../../Redux/action/deleteProductAction";
import Allpagination from "../../../Pagination/pagination";
import { CiEdit } from "react-icons/ci";
import { LuClipboardEdit } from "react-icons/lu";

const Allproducts = (params) => {
  
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const data = useSelector(
    (state) => state?.GetAdminProductAllListData?.listdata
  );
  const isLoading = useSelector(
    (state) => state?.GetAdminProductAllListData?.isLoading
  );

  const listCount = useSelector(
    (state) => state?.GetAdminProductAllListData?.listdata?.count
  );

  console.log(data, "fwkenfljn");

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const [readMoreState, setReadMoreState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      allAdminProductList({
        search: "",
        page: currentPage,
        perPage: postPerPage,
      })
    );
  }, [currentPage]);
  const handleProduct = () => {
    navigate("/product");
  };

  const deleteClick = (_id) => {
    setSelectedProductId(_id);
    setShowModal(true);
  };

  const handleDeleteConfirmation = () => {
    setShowModal(false);
    toast.error("Delete Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });

    dispatch(deleteProduct({ _id: selectedProductId })).then((res) => {
      console.log(res?.meta?.requestStatus);
      if (res?.meta?.requestStatus === "fulfilled") {
        dispatch(
          allAdminProductList({
            search: "",
            page: currentPage,
            perPage: postPerPage,
          })
        );
      } else {
        window.alert("Product deletion failed.");
      }
    });
  };

  const updata = useSelector(
    (state) => state?.updateProductData?.listdata?.data
  );
  console.log(updata, "updata");

  const editClick = (_id, values) => {
    let payload = { id: _id };
    const formData = new FormData();
    formData.append("userData", JSON.stringify(payload));
    console.log(JSON.parse(formData.getAll("userData")), "datass");
    dispatch(
      editProductdetail({
        search: "",
        page: currentPage,
        perPage: postPerPage,
        id: _id,
      })
    );
    setShow(true);
    console.log("wwww");
  };
  const handleClose = () => setShow(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      dispatch(allAdminProductList({ search: e.target.value }));
    } else {
      dispatch(
        allAdminProductList({
          // search: "",
          page: currentPage,
          perPage: postPerPage,
        })
      );
    }
  };

  const onClose = (data) => {
    setShow(data);
  };
  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Products</h3>
            <div>
              <Button
                className="Admin_rbutton"
                variant="secondary"
                onClick={handleProduct}
              >
                <AiOutlinePlus className="Admin_icons" />
                Add Product
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="searchbutton">
            <div className="form_control_or_btngroup">
              <div className="all_product_search ">
                <FiSearch className="allproduct_searchicon " />
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 adminsearch_bar"
                  value={searchQuery}
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
              <>
                <div className="table_Spinner productspinner">
                  <Spinner animation="border" variant="dark" />
                </div>
              </>
            ) : (
              <>
                {data && data.products && data.products.length > 0 ? (
                  <>
                    <Table responsive="lg" className="position-relative">
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th>Product Name</th>
                          <th>Brand</th>
                          <th>Categories</th>
                          <th>Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <>
                          {data?.products?.map((product, index) => {
                            console.log(product, "asdasdasdasd");
                            return (
                              <>
                                <tr key={index}>
                                  <td>
                                    {(currentPage - 1) * postPerPage +
                                      (index + 1)}
                                  </td>
                                  <td>
                                    {product?.title?.substring(
                                      0,
                                      readMoreState === product?._id
                                        ? product?.title?.length
                                        : 50
                                    )}
                                    {product?.title?.length > 50 && (
                                      <p
                                        onClick={() => {
                                          if (readMoreState === product?._id) {
                                            setReadMoreState(null);
                                          } else {
                                            setReadMoreState(product?._id);
                                          }
                                        }}
                                      >
                                        read
                                        {readMoreState === product?._id
                                          ? "Less"
                                          : "More"}
                                      </p>
                                    )}
                                  </td>
                                  <td>{product?.brand[0]?.brand}</td>
                                  <td>{product?.category[0]?.category}</td>
                                  <td>{product.price}</td>
                                  <td>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant=""
                                        id="dropdown-basic"
                                      >
                                        <BiDotsVerticalRounded />
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                          <button
                                            className="editdeleter_button"
                                            onClick={() =>
                                              editClick(product._id)
                                            }
                                          >
                                            <LuClipboardEdit /> Edit
                                          </button>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                          <button
                                            className="editdeleter_button"
                                            onClick={() =>
                                              deleteClick(product._id)
                                            }
                                          >
                                            <AiOutlineDelete /> delete
                                          </button>
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </>
                      </tbody>
                    </Table>
                  </>
                ) : (
                  <>
                    <Table>
                      <thead>
                        <tr>
                          <th>S/L</th>
                          <th>Product Name</th>
                          <th>Brand</th>
                          <th>Categories</th>
                          <th>Price</th>
                          <th>Action</th>
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
            {searchQuery && searchQuery ? (
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
          </Col>
        </Row>
        <MydModalWithGrid
          show={show}
          handleClose={handleClose}
          productId={editClick}
          onClose={onClose}
        />
        <ConfirmationModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onConfirm={handleDeleteConfirmation}
        />
      </div>
    </>
  );
};
export default Allproducts;
