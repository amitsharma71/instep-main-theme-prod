import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCategoryList } from "../../../Redux/action/getCategoryAction";
import Subcategorymobilefilter from "../filterbyCategory/SubcaregoryMobilefilter";
import SubCategoryfilter from "../filterbyCategory/subCategoryfilter";
import Spinner from "../loader/spinner";

const Onlymobile = () => {
  const dispatch = useDispatch();
  const categorydata = useSelector((state) => state?.getproductdata?.listdata);
  console.log(categorydata, "dafdsafds");

  const loading = useSelector((state) => state?.getproductdata?.isLoading);
  useEffect(() => {
    dispatch(allCategoryList());
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className=" container slider_col">
            <Row>
              {/* <Col lg={2} md={4} sm={4}>
                                <Subcategorymobilefilter />
                                <SubCategoryfilter />
                            </Col> */}
              <Col lg={12} md={8} sm={8}>
                <Row>
                  {categorydata &&
                    categorydata?.products?.map((item, index) => {
                      if (
                        item?.category?.[0]?.category === "Electronics" &&
                        item &&
                        item.discountpercentage >= 30
                      ) {
                        return (
                          <Col lg={3} md={4} key={index}>
                            <Link
                              className="card_deco"
                              to={`/productdetail/${item._id}`}
                            >
                              <Card className="shopping_card margin_bottom">
                                <div className="">
                                  <Card.Img
                                    variant="top"
                                    src={
                                      item?.image
                                        ? item?.image
                                        : item?.thumbnail?.split(":").length > 1
                                        ? item?.thumbnail
                                        : `http://localhost:5000/uploads/${item.thumbnail}`
                                    }
                                  />
                                </div>
                                <Card.Body>
                                  <Card.Title className="crad_text">
                                    {item?.title}
                                  </Card.Title>
                                  <Card.Text className="crad_text">
                                    <h6> ₹ {item?.price}</h6>
                                    <h6 className="text-danger">
                                      {item?.discountpercentage} %off
                                    </h6>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Link>
                          </Col>
                        );
                      }
                    })}
                </Row>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default Onlymobile;
