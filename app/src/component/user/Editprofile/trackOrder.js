import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Getorderdetail } from "../../../Redux/action/orderSummary";
import { getUserId } from "../../../utils/auth";
import Allpagination from "../../admin/Pagination/pagination";
import { allAdminProductList } from "../../../Redux/action/getAllProductListing";
import { useNavigate } from "react-router-dom";

const TrackOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listCount = useSelector(
    (state) => state?.getallorderdetail?.listdata?.data?.Count
  );
  console.log(listCount, "ASDFASD");
  const userData = getUserId();
  console.log(userData, "usr");
  const idata = userData.id;
  
  const orderdatasum = useSelector(
    (state) => state?.getallorderdetail?.listdata?.data?.ordersWithProducts
    );
    console.log(orderdatasum, "daa");
  useEffect(() => {
    // dispatch(allAdminProductList())
    dispatch(
      Getorderdetail({
        userid: idata,
        pageNo: currentPage,
        pageSize: postPerPage,
      })
    );
  }, [currentPage]);
  //   const handleViewDetails = () => {};

  const handleOrder = (e) => {
    console.log(e, "fafdfafadfdas");
    // navigate(`/orderconfirmation/${e?.productID[0]?._id}`)
  };

  return (
    <div>
      <div className="recent_orders">
        <h3>Your Orders</h3>
      </div>
      <Table responsive="md" className="main">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Quantity</th>
            <th>Product</th>
            <th>Price </th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through orders array to populate table rows */}
          {orderdatasum &&
            orderdatasum?.map((e, i) => {
              return (
                <tr>
                  <td>{(currentPage - 1) * postPerPage + (i + 1)}</td>
                  <td>{e?.quantity}</td>
                  <td>{e?.productID[0]?.title}</td>
                  <td>{e?.amount}</td>
                  <td>{e?.status}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <Allpagination
          currentPage={currentPage}
          postPerPage={postPerPage}
          setPostPerPage={setPostPerPage}
          setCurrentPage={setCurrentPage}
          listCount={listCount}
        />
      </div>
    </div>
  );
};

export default TrackOrder;
