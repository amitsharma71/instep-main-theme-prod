import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../../../../Redux/action/getProductDetailAction";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Subcategorymobilefilter from "../../filterbyCategory/SubcaregoryMobilefilter";
import SubCategoryfilter from "../../filterbyCategory/subCategoryfilter";
import Spinner from "../../loader/spinner";
import {
  wishlistadd,
  wishlistget,
  wishlistremove,
} from "../../../../Redux/action/wishlistAction";
import { getUserId } from "../../../../utils/auth";
import Scrolltotopbutton from "../../ScoolToTop/scrolltotopbutton";
// import Wishlistmaincomponent from "../../wshlistData/wishlistmaincomponent"

const AllProductDetail = () => {
  const dispatch = useDispatch();
  const userData = getUserId();
  console.log(userData, "userData");

  const data = useSelector((state) => state?.getproductdata?.listdata);
  const data1 = useSelector(
    (state) => state?.getproductdata?.listdata?.products
  );

  console.log(data1, "dssssssss");
  // const productIds = data1 ? data1._id : null;
  const productIds = data1?._id;
  console.log(productIds, "asdfgfds");

  const loading = useSelector((state) => state?.getproductdata?.isLoading);

  console.log(loading, "loadingss");

  const [wishlist, setWishlist] = useState({});

  const datas = useSelector(
    (state) => state?.getwishlisdData?.listdata?.data?.data
  );

  console.log(datas, "datasaasss");

  useEffect(() => {
    dispatch(getProductAction());
    dispatch(wishlistget({ userId: userData?.id }));
  }, []);

  const productClick = (_id) => {
    console.log(_id, "hhddhhjjjjjjjjjjj");
  };

  const handleWishlistClick = (productId, wishliststatus) => {
    console.log(productId, "sdfghjk");
    if (wishliststatus == "delete") {
      //Delete API
      dispatch(
        wishlistremove({ userId: userData?.id, itemId: productId })
      ).then((res) => {
        dispatch(wishlistget({ userId: userData?.id }));
      });
    } else if (wishliststatus == "add") {
      //Add API
      dispatch(
        wishlistadd({
          userId: userData?.id,
          items: productId,
        })
      ).then((res) => {
        dispatch(wishlistget({ userId: userData?.id }));
      });
    }
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [productId]: !prevWishlist[productId],
    }));
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container-fluid  slider_col ">
            <Row>
              <Col lg={2} md={4} sm={4}>
                <Subcategorymobilefilter />
                <SubCategoryfilter />
              </Col>
              <Col lg={10} md={8} sm={8}>
                <div className="subcarhide margin_bottom">
                  <div className="subcategory_topcontent">
                    <div>
                      <Link className="home_link" to="/">
                        Home
                      </Link>
                      <BiChevronRight />
                    </div>
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
                  <div></div>
                  <div className="righthome_filter">
                    <h4>Sort By</h4>
                    <h4>Popularity</h4>
                    <h4>Price--Low to High</h4>
                    <h4>Price--High to Low </h4>
                    <h4>Newest First </h4>
                  </div>
                </div>
                <div className="margin_bottom">
                  <Row>
                    {data &&
                      data?.products?.map((e, i) => {
                        if (e.image) {
                        }
                        let isInwishlist =
                          datas &&
                          datas?.length > 0 &&
                          datas?.find((item) => item?.items === e?._id);

                        console.log(isInwishlist, "fiuwehfr3wre");
                        return (
                          <Col lg={3} md={4} className="d-flex">
                            <Card className=" forcatcards_htwd ">
                              <div className="d-flex justify-content-end mt-2 mx-2">
                                {/* <Wishlistmaincomponent data={e} /> */}
                                {
                                  isInwishlist ? (
                                    <AiFillHeart
                                      style={{
                                        color: "#FF0000", // Change to your desired color
                                        width: "23px",
                                        height: "23px",
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        handleWishlistClick(e?._id, "delete")
                                      }
                                    />
                                  ) : (
                                    // wishlist[e._id] ? (
                                    //   <AiFillHeart
                                    //     style={{
                                    //       color: "#FF0000", // Change to your desired color
                                    //       width: "23px",
                                    //       height: "23px",
                                    //       cursor: "pointer",
                                    //     }}
                                    //     onClick={() =>
                                    //       handleWishlistClick(e?._id, "delete")
                                    //     }
                                    //   />
                                    // ) : (
                                    <AiOutlineHeart
                                      style={{
                                        color: "#808080",
                                        width: "23px",
                                        height: "23px",
                                        cursor: "pointer",
                                      }}
                                      onClick={() =>
                                        handleWishlistClick(e._id, "add")
                                      }
                                    />
                                  )
                                  // )
                                }
                              </div>
                              <Link
                                className="card_deco"
                                to={`/productdetail/${e._id}`}
                                onClick={() => productClick(e?._id)}
                              >
                                <div className="">
                                  <Card.Img
                                    variant="top"
                                    src={
                                      e?.image
                                        ? e?.image
                                        : e?.thumbnail?.split(":").length > 1
                                        ? e?.thumbnail
                                        : `http://localhost:5000/uploads/${e?.thumbnail}`
                                    }
                                  />
                                </div>
                                <Card.Body>
                                  <div className="item_rating">
                                    <p className="homerating_cat">
                                      {e?.category[0]?.category}
                                    </p>
                                  </div>
                                  <Card.Title className="crad_text">
                                    {e?.title}
                                  </Card.Title>
                                  <Card.Text className="crad_text"></Card.Text>
                                  <Card.Text className="crad_text">
                                    <h5> ₹ {parseInt(e?.totalprice)}</h5>
                                  </Card.Text>
                                  <Card.Text className="crad_text">
                                    {e.stock > 0 ? (
                                      <h6> </h6>
                                    ) : (
                                      <p className="text-danger">
                                        Out of stock
                                      </p>
                                    )}
                                  </Card.Text>
                                </Card.Body>
                              </Link>
                            </Card>
                          </Col>
                        );
                      })}
                  </Row>
                </div>
              </Col>
            </Row>
            <Scrolltotopbutton />
          </div>
        </>
      )}
    </>
  );
};

export default AllProductDetail;
