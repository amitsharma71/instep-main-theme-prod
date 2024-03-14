//Orders Reports inside the Reports

import React, { useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css"; // Import a theme from flatpickr
import "flatpickr/dist/flatpickr.css";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";
function Orderreport() {
  //   let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  return (
    <div className="admin_toppadding ">
      <Row>
        <Col className="Admin_dashboard margin_bottom" lg={12}>
          <h3 id="orderReport"> Orders Report</h3>
        </Col>
      </Row>
      <Row className="searchbutton">
        <Col lg={12}>
          <div className=" margin_bottom">
            <div className="leftorderreport_edit">
              <div>
                <Flatpickr
                  className="order_date"
                  ref={startDateRef}
                  options={{
                    dateFormat: "m/d/Y",
                    onClose: (_, selectedDates) => {
                      // Set the minimum date for the end date calendar
                      if (selectedDates.length > 0) {
                        endDateRef.current.flatpickr.set(
                          "minDate",
                          selectedDates[0]
                        );
                      }
                    },
                  }}
                  placeholder="Start Date"
                />
                <span className="date-range-separator">to</span>
                <Flatpickr
                  className="order_date"
                  ref={endDateRef}
                  options={{
                    dateFormat: "m/d/Y",
                    onClose: (_, selectedDates) => {
                      // Set the maximum date for the start date calendar
                      if (selectedDates.length > 0) {
                        startDateRef.current.flatpickr.set(
                          "maxDate",
                          selectedDates[0]
                        );
                      }
                    },
                  }}
                  placeholder="End Date"
                />
              </div>
              <div className="">
                {/* <Form.Select className="order_payment_status  mx-3 ">
                    <option>Payment Status</option>
                    <option>Paid</option>
                    <option>Unpaid</option>
                  </Form.Select>
                  <Form.Select className="order_payment_status mx-3">
                    <option>Delivery Status</option>
                    <option>Order Placed </option>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </Form.Select> */}
                <div className="">
                  <Button className="select_button" type="submit">
                    <AiOutlineSearch /> search
                  </Button>
                </div>
              </div>
            </div>

            {/* <div className="orderrightbuttons"></div> */}
          </div>
        </Col>
        <Col>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>S/L</th>
                <th>Placed On</th>
                <th>Items</th>
                <th>Payment Status</th>
                <th>Delivery Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>₹116.82</td>
              </tr>
              <tr>
                <td>2</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>₹10,096.79</td>
              </tr>
              <tr>
                <td>3</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Unpaid</td>
                <td>Pending</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>4</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Unpaid</td>
                <td>Pending</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>5</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Unpaid</td>
                <td>Pending</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>6</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Unpaid</td>
                <td>Pending</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>7</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Paid</td>
                <td>Pending</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>8</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Paid</td>
                <td>Pending</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>9</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Unpaid</td>
                <td>order place</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>10</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Unpaid</td>
                <td>Pending</td>
                <td>T₹9,716.82</td>
              </tr>
              <tr>
                <td>11</td>
                <td> 07 Aug, 2023</td>
                <td>1</td>
                <td>Paid</td>
                <td>order place</td>
                <td>T₹9,716.82</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <div className="table_pageination">
          <div>Showing 1-30 of 36 results</div>
          <Pagination>{items}</Pagination>
        </div>
      </Row>
    </div>
  );
}

export default Orderreport;
