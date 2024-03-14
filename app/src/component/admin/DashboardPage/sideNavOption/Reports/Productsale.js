import React from "react";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function Productsale() {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
  }
  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Product Sale Report</h3>
          </Col>
        </Row>
        <Row className="searchbutton">
          <Col lg={12}>
            <div className="margin_bottom">
              <Row>
                <Col lg={8}>
                  <div className="all_product_search category_search">
                    <div className="d-flex">
                      <FiSearch className="allproduct_searchicon " />{" "}
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2 adminsearch_bar"
                      />
                    </div>
                    <Form.Select className="order_div">
                      <option>High - Low</option>
                      <option>Low -High </option>
                    </Form.Select>{" "}
                    <Button className="select_button" type="submit">
                      {" "}
                      <AiOutlineSearch /> search
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col>
            {" "}
            <Table>
              <thead>
                <tr>
                  <th>S/L</th>
                  <th> Product Name</th>
                  <th className="table_colmn">Total Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Din Cake Classic Browine</td>
                  <td className="table_colmn num_bers">14</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Red Tomato 25gm</td>
                  <td className="table_colmn num_bers">13</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>cinthol </td>
                  <td className="table_colmn num_bers">15</td>
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
    </>
  );
}

export default Productsale;
