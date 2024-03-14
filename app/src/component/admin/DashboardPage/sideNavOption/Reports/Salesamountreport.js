//salesAmount  inside the Report
import React, { useRef } from "react";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import { AiOutlineSearch } from "react-icons/ai";

function Salesamount() {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Sales Amount Report</h3>
          </Col>
        </Row>
        <Row className="searchbutton">
          <Col lg={12}>
            {/* <div className="d-flex justify-content-between"> */}
            <div className=" margin_bottom">
              <Row>
                <Col lg={9} md={9} sm={9} xs={9}>
                  <div className="saleordernew">
                    <div className="d-flex">
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
                      <span className="date-range-separator  m-3">to</span>
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
                    <div className="d-flex">
                      <Form.Select className=" saledivnewchanges">
                        <option>High - Low</option>
                        <option>Low -High </option>
                      </Form.Select>
                      <button type="submit" className="addcatsubit_button">
                        Search
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <div className="_totaldelivery_order">
                    <p>Total Amount</p>
                    <p>₹398,939.30</p>
                  </div>
                </Col>
              </Row>
            </div>

            {/* </div> */}
          </Col>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>S/L</th>
                  <th>Date</th>
                  <th className="table_colmn table_value">Total Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> 06 Aug, 2023</td>
                  <td className="table_colmn table_value">₹75,200.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td> 05 Aug, 2023</td>
                  <td className="table_colmn table_value">₹40,200.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td> 06 Aug, 2023 </td>
                  <td className="table_colmn table_value">₹85,200.00</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td> 06 Aug, 2023 </td>
                  <td className="table_colmn table_value">34,200.00</td>
                </tr>
              </tbody>
            </Table>
            Showing 1-30 of 32 results
            <div className="table_pageination">
              <Pagination>{items}</Pagination>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Salesamount;
