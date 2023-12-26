import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Getorderdetail } from "../../../Redux/action/orderSummary";
import { getUserId } from "../../../utils/auth";

const TrackOrder = () => {
  const dispatch = useDispatch();

  const userData = getUserId();
  console.log(userData, "usr");
  const idata = userData.id;
  console.log(idata, "daa");

  const orderdata = useSelector(
    (state) =>
      state?.getallorderdetail?.listdata?.data?.ordersWithProducts[0]?.products
  );
  console.log(orderdata, "dataorder");

  useEffect(() => {
    dispatch(Getorderdetail({ userid: idata }));
  }, [""]);

  return (
    <div>
      <div className="recent_orders">
        <h3>Your Orders</h3>
      </div>
      <Table responsive="md" className="main">
        <thead>
          <tr>
            <th>Order Code</th>
            <th>Placed On </th>
            <th>Items</th>
            <th>Total</th>
            <th>Status </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through orders array to populate table rows */}
          {orderdata.map((order, index) => (
            <tr key={index}>
              <td>{order.orderCode}</td>
              <td>{order.placedOn}</td>
              <td>{order.items}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                {/* Action buttons or links for each order */}
                {/* You can add buttons or links for actions like view details, etc. */}
                {/* <button onClick={() => handleViewDetails(order.orderCode)}> */}
                {/* View Details */}
                {/* </button> */}
                {/* Add more action buttons or links as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TrackOrder;
