import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCategoryList } from "../../../Redux/action/getCategoryAction";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { allSubCategoryList } from "../../../Redux/action/getSubcategoryAction";
import { AllFilterationData } from "../../../Redux/action/allFilterationAction";

const AllCategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allcatgorydata = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );

  const productClicks = (categoryId) => {
    navigate(`/category/${categoryId}`);
    dispatch(AllFilterationData({ categoryId: categoryId }));

    dispatch(allSubCategoryList({ category_id: categoryId }));
  };

  useEffect(() => {
    dispatch(allCategoryList());
  }, []);
  return (
    <>
      <Container>
        <div className="slider_col margin_bottom">
          <Row>
            <Col lg={12}>
              {/* <h2 className="ourtopcategories_home margin_bottom"></h2> */}
              <div className=" margin_bottom">
                <Row>
                  {allcatgorydata &&
                    allcatgorydata?.map((item, index) => {
                      console.log(item, "Gdsgdsgd");
                      const categoryId = item?._id;
                      return (
                        <Col
                          lg={2}
                          md={3}
                          sm={4}
                          s={2}
                          className="catborder_align margin_bottom"
                        >
                          <div key={index}>
                            <Card>
                              <div className="top_catcard">
                                <div
                                  className="pos_catimage posalignimg"
                                  onClick={() => productClicks(categoryId)}
                                >
                                  <img
                                    className="topcatimage_home align-imgcat"
                                    src={`http://localhost:5000/categoryimg/${item.images}`}
                                    alt=""
                                  />
                                </div>
                                <p>{item?.category}</p>
                              </div>
                            </Card>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default AllCategories;
