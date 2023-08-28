import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { homesubcategory } from "../../../../Redux/action/homesubcategory";
import { Link, useParams } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
const Subcategory = () => {
  const { subcategory } = useParams();

  const dispatch = useDispatch();

  const data = useSelector((state) => state?.homesubcategoryapi?.listdata);
  console.log(data, "goapppppppal");
  console.log(subcategory, "ggggg");
  useEffect(() => {
    dispatch(homesubcategory(subcategory));
  }, []);
  return (
    <>
      <div className="container-fluid home_subcatetop">
        <Row>
          <Col lg={2}>
            <div className="leftfilter_bar">
              <div className="margin_bottom">
                <h4> Filters</h4>
              </div>
              <div className="categorieslefftfilter margin_bottom">
                CATEGORIES
                <h5>{subcategory} </h5>
              </div>
              <div>
                <div className="pricealign margin_bottom">
                <input className="pricerange_filter" type="range" /></div>
                <div className="d-flex priceoption margin_bottom">
                  <div className="leftpricefilter_wid">
                    <select className="pricefilter_left" name="cars" id="cars">
                      <option value="">Min</option>
                      <option value="">100</option>
                      <option value="">500</option>
                      <option value="">999</option>
                    </select>
                  </div>
                  to
                  <div className="leftpricefilter_wid">
                    <select className="pricefilter_left" name="cars" id="cars">
                      <option value="">700</option>
                      <option value="">1500</option>
                      <option value="">1999</option>
                      <option value="">2499+</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h5> BRAND</h5>
                <div className="brands_filters">
                  <from>
                    <input className="margin_right"type="checkbox" />
                    <lable className="fontweight">HAVELLES</lable>
                    <br />
                    <input className="margin_right" type="checkbox" />
                    <lable className="fontweight">HAVELLES</lable>
                    <br />
                    <input className="margin_right" type="checkbox" />
                    <lable className="fontweight">HAVELLES</lable>
                    <br />
                    <input className="margin_right" type="checkbox" />
                    <lable className="fontweight">HAVELLES</lable>
                    <br />
                    <input className="margin_right" type="checkbox" />
                    <lable className="fontweight">HAVELLES</lable>
                  </from>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={10}>
            <div className="rightboxborder">
              <Row>
                <Col lg={12}>
                  <div className="subcategory_topcontent">
                    <div>
                      <Link className="home_link" to="/">
                        Home{" "}
                      </Link>
                      <BiChevronRight />
                    </div>
                    <div>{subcategory}</div>
                  </div>
                  <div className="margin_bottom">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                  <div>
                    <h4>{subcategory}</h4>
                  </div>
                  <div className="righthome_filter">
                    <h4>Sort By</h4>
                    <h4>Popularity</h4>
                    <h4>Price-- Low to High</h4>
                    <h4>Price--High to Low </h4>
                    <h4>Newest First </h4>
                  </div>
                </Col>
              </Row>
              <Row>
                {data?.map((item) => {
                  return (
                    <>
                      <Col lg={3}>
                        <Card className="shopping_card subcat_homecard">
                          <div className="homesub_image">
                            <Card.Img
                              variant="top"
                              src={item?.image || item?.thumbnail}
                            />
                          </div>
                          <Card.Body>
                            <div className="item_rating">
                              <p className="homerating_cat"> {item?.rating}</p>
                              <p className="homerating_cat"> {item.category}</p>
                            </div>
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
                      </Col>
                    </>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Subcategory;