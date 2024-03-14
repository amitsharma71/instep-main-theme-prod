import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Subcaregoryfilter from "../user/filterbyCategory/SubcaregoryMobilefilter";
import SubCategoryfilter from "../user/filterbyCategory/subCategoryfilter";
import { BsFillHeartFill } from "react-icons/bs";
import { MdScreenSearchDesktop } from "react-icons/md";
import Spinner from "../user/loader/spinner";

function Searchproduct() {
  const item = useSelector((state) => state?.Searchproduct?.listdata);
  const loading = useSelector((state) => state?.Searchproduct?.isLoading);
  console.log(item, "item");
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="slider_col container-fluid ">
            <Row>
              {item && item.length >= 1 && (
                <Col lg={2} md={3} sm={4}>
                  <div>
                    <Subcaregoryfilter />
                    <SubCategoryfilter />
                  </div>
                </Col>
              )}
              <Col lg={item && item.length >= 1 ? 10 : 12} md={9} sm={8}>
                <Row>
                  {item.length > 0 ? (
                    item.map((item) => {
                      return (
                        <>
                          <Col lg={3}>
                            <div className="d-flex justify-content-end mt-2 mx-2">
                              <BsFillHeartFill
                                style={{ color: "#808080" }}
                                // onClick={showwishilist}
                              />
                            </div>
                            <Link
                              className="card_deco"
                              to={`/productdetail/${item._id}`}
                            >
                              <Card className=" forcatcards_htwd">
                                <div className="">
                                  <Card.Img
                                    variant="top"
                                    src={
                                      item?.image
                                        ? item?.image
                                        : item?.thumbnail.split(":").length > 1
                                        ? item?.thumbnail
                                        : `http://localhost:5000/uploads/${item.thumbnail}`
                                    }
                                  />
                                </div>
                                <Card.Body>
                                  <div className="item_rating"></div>
                                  <Card.Title className="crad_text">
                                    {item.title}
                                  </Card.Title>
                                  <Card.Text className="crad_text">
                                    {item?.description}
                                  </Card.Text>
                                  <Card.Text className="crad_text">
                                    <h5> ₹ {item?.price}</h5>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Link>
                          </Col>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <div style={{ height: "100vh" }}>
                        <div className="d-flex justify-content-center align-items-center ">
                          <MdScreenSearchDesktop className="notfound-icon" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <h1> Sorry, no result found</h1>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                          <h3> Check the spellings or try something else</h3>
                        </div>
                      </div>
                    </>
                  )}
                </Row>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
}

export default Searchproduct;
