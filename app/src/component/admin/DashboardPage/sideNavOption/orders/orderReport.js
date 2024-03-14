import React, { useEffect } from "react";
import { Getorderdetail } from "../../../../../Redux/action/orderSummary";
import { getUserId } from "../../../../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";


const OrderReport = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const userData = getUserId();
    console.log(userData, "usr");
    const idata = userData.id;
    console.log(idata, "daa");

    const orderdatasum = useSelector(
        (state) => state?.getallorderdetail?.listdata?.data?.ordersWithProducts
    );
    console.log(orderdatasum, "dataorder");

    useEffect(() => {
        dispatch(Getorderdetail({  }));
    }, [""]);


    const handleOrder = (e) => {
        console.log(e, "fafdfafadfdas")
        }
    return (
        <>
            <div>
                <div className="recent_orders">
                    <h3>Your Orders</h3>
                </div>
                <Table responsive="md" className="main">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Quantity</th>
                            <th>Product</th>
                            <th>Price </th>
                            <th>Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through orders array to populate table rows */}
                        {orderdatasum?.map((e, i) => (
                            <tr onClick={() => handleOrder(e)}>
                                <td>{i + 1}</td>
                                <td>{e?.quantity}</td>
                                <td>{e?.productID[0]?.title}</td>
                                <td>{e?.amount}</td>
                                <td>{e?.status}</td>
                            </tr>
                            // <tr key={index}>
                            //   <td>{order.orderCode}</td>
                            //   <td>{order.placedOn}</td>
                            //   <td>{order.items}</td>
                            //   <td>{order.total}</td>
                            //   <td>{order.status}</td>
                            //   <td>
                            //     <button onClick={() => handleViewDetails(order.orderCode)}>
                            //       View Details
                            //     </button>
                            //   </td>
                            // </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default OrderReport;