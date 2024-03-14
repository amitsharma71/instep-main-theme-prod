import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Spinner, Table } from "react-bootstrap";
// import { LuEdit3 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
// import ConfirmationModal from "../../../admin/confirmModel";
import { toast, ToastContainer } from "react-toastify";
import MydModalWithGrid from "../../../addProductDetails/updateProductForm";
import ConfirmationModal from "../../../addProductDetails/confirmModel";
import { updateProduct } from "../../../../../Redux/action/updateProductAction";
import { allAdminProductList } from "../../../../../Redux/action/getAllProductListing";
import { deleteProduct } from "../../../../../Redux/action/deleteProductAction";
import Allpagination from "../../../Pagination/pagination";
import { searchAction } from "../../../../../Redux/action/searchProductAction";
import { LuClipboardEdit } from "react-icons/lu";

function Alllocation(params) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  // const [showlist, setShowList] = useState(false);
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

  const handleSearch = () => {
    if (searchQuery) {
      dispatch(
        allAdminProductList({
          search: searchQuery,
          page: currentPage,
          perPage: postPerPage,
        })
      );
    } else {
      dispatch(
        allAdminProductList({
          search: "",
          page: currentPage,
          perPage: postPerPage,
        })
      );
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const [readMoreState, setReadMoreState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      allAdminProductList({
        search: searchQuery,
        page: currentPage,
        perPage: postPerPage,
      })
    );
    // dispatch(searchAction({ name: searchQuery }));
  }, [currentPage, searchQuery]);
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
        dispatch(allAdminProductList());
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

    // If you have other values to append from the 'values' object, you can do so like this:
    // formData.append('key', values.key);

    dispatch(updateProduct(formData));
    setShow(true);
    console.log("wwww");
  };
  const handleClose = () => setShow(false);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> All Stocks</h3>
            {/* <div>
              <Button
                className="Admin_rbutton"
                variant="secondary"
                onClick={handleProduct}
              >
                <AiOutlinePlus className="Admin_icons" />
                Add Product
              </Button>
            </div> */}
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
                  onKeyDown={onKeyDownHandler}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                />
              </div>
              {/* <div className="btngroup">
                <Button className="select_button " type="submit" onClick={handleSearch}>
                  <AiOutlineSearch /> search
                </Button>
              </div> */}
            </div>
            {isLoading ? (
              <div className="table_Spinner productspinner">
                <Spinner animation="border" variant="dark" />
              </div>
            ) : (
              <>
                <Table responsive="md" className="position-relative">
                  <thead>
                    <tr>
                      <th>S/L</th>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Categories</th>
                      <th>Price</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data?.products?.map((product, index) => {
                        console.log(product, "asdasdasdasd");
                        return (
                          <>
                            <tr key={index}>
                              <td>
                                {(currentPage - 1) * postPerPage + (index + 1)}
                              </td>
                              <td>
                                {product.title.substring(
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
                              <td>{product?.price}</td>
                              <td>
                                {product && product.stock === "out of stock" ? (
                                  <div className="outofst-ock">
                                    {product?.stock}
                                  </div>
                                ) : (
                                  <div className="instock">{product?.stock}</div>
                                )}
                              </td>
                              
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </Table>
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
          </Col>
        </Row>
        <MydModalWithGrid
          show={show}
          handleClose={handleClose}
          productId={editClick}
        />
        <ConfirmationModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onConfirm={handleDeleteConfirmation}
        />
        {/* <ToastContainer /> */}
      </div>
    </>
  );
}
export default Alllocation;
