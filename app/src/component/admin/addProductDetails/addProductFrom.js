import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Field } from "react-final-form";
import { Form as FinalForm, reset } from "react-final-form";
import { adminPostProduct } from "../../../Redux/action/adminPostProductAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { MdCancel } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import {
  selectBrandFilter,
  selectCategoryFilter,
} from "../../../Redux/action/filterByCategory";
import { selectSubCategoryFilter } from "../../../Redux/action/filterBySubcategory";
import { selectTypesubcategoryFilter } from "../../../Redux/action/filterByTypeSubcategory";
import { findbrandfilter } from "../../../Redux/action/typesubcatpost";
// import { spacificAction } from "../../../Redux/action/productAction";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state);

  const [imgupload, setImgupload] = useState("");

  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory, "dsjhhf");
  const [subcategory, setSubcategory] = useState("");
  const [subcategoryid, setSubcategoryid] = useState("");
  const [brandcategory, setBrandcategory] = useState("");
  const [brand, setbrand] = useState("");
  const [typsubcat, setTypSubcat] = useState("");
  const [typsubcatId, setTypSubcatId] = useState("");
  console.log(brandcategory, "zzzz");

  const [selectedthumbnalFile, setselectedthumbnalFile] = useState([]);
  const [thumbnail, setthumbnail] = useState("");
  const [subcategorydata, setsubcategorydata] = useState("");

  const handlethumbnalfile = (e) => {
    const files = e.target.files;
    const image = e.target.files[0];

    if (!image) {
      return false;
    }

    if (!image.name.match(/\.(jpg|jpeg|png|svg|webp)$/)) {
      toast.error("Upload file in the form of jpg, jpeg or png");
      setSelectedImages([]);
      e.target.value = null;
      return false;
    }

    const maxSize = 50;
    if (image.size > maxSize * 1024) {
      toast.error("The amximum file size allowed (50KB)");
      setSelectedImages([]);
      e.target.value = null;
      return false;
    }
    const uniqueId = Date.now();
    let name = e.target.files[0].name;
    const filename = uniqueId + "_" + name;
    let file = new File(files, filename);
    setselectedthumbnalFile(file);
    // console.log(file, "AAAA");

    let imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setthumbnail([imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const [selectedImagesforpost, setselectedImagesforpost] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImgeFile = (e) => {
    const files = e.target.files;
    const image = e.target.files[0];

    if (!image) {
      return false;
    }

    if (!image.name.match(/\.(jpg|jpeg|png|svg|webp)$/)) {
      toast.error("Upload file in the form of jpg, jpeg or png");
      setSelectedImages([]);
      e.target.value = null;
      return false;
    }
    const maxSize = 50;
    if (image.size > maxSize * 1024) {
      toast.error("The amximum file size allowed (50KB)");
      setSelectedImages([]);
      e.target.value = null;
      return false;
    }

    const uniqueId = Date.now();
    let name = e.target.files[0].name;
    const filename = uniqueId + "_" + name;
    let file = new File(files, filename);
    setselectedImagesforpost([...selectedImagesforpost, file]);
    // images  which is upoads
    let imagesArray = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([...selectedImages, imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  let formRef;

  const onSubmit = (values) => {
    var formData = new FormData();

    const payload = {
      description: values?.description,
      category_id: values?.category,
      subcategory_id: values?.subcategory,
      title: values?.title,
      price: values?.price,
      brand_id: values?.brand,
      discountpercentage: values?.discountpercentage,
      stock: values?.stock,
      tax: values?.tax,
      rating: values?.rating,
      image: selectedImagesforpost,
      type_subcategory_id: values?.typesubcategory,
    };

    // console.log("shar", payload);
    selectedImagesforpost.map((items) => {
      formData.append("images", items);
    });
    formData.append("thumbnail", selectedthumbnalFile);
    console.log(selectedthumbnalFile, "Sdsdsdsdsdfvsdsvfssvsvs");
    formData.append("userData", JSON.stringify(payload));
    // console.log(payload, "ggg");
    console.log(JSON.parse(formData.getAll("userData")), "data");
    dispatch(adminPostProduct(formData)).then((res) => {
      if (res?.payload?.status) {
        formRef.reset();
        toast.success("Successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setSelectedImages("");
        setselectedImagesforpost("");
        setthumbnail("");
        setselectedthumbnalFile("");
        resetFileInput("");
        // handleImgeFile("")
      }
      console.log(res?.payload?.data?.product?._id, "Response");
      console.log(res?.payload, "respss");
      // if (res?.payload?.data?.product?._id) {
      //   navigate(`/productspecification/${res?.payload?.data?.product?._id}`);
      //   dispatch(
      //     spacificAction({ ProductID: res?.payload?.data?.product?._id })
      //   );
      // }
    });
  };

  const resetFileInput = () => {
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      const newFileInput = document.createElement("input");
      newFileInput.type = "file";
      newFileInput.name = "images";
      newFileInput.className = "form-control signup_form_input margin_bottom";
      newFileInput.addEventListener(
        "change",
        handleImgeFile && handlethumbnalfile
      );

      fileInput.parentNode.replaceChild(newFileInput, fileInput);
    }
  };

  const deleteimage = (index) => {
    let imagedataArray = [...selectedImagesforpost];
    let showimageArray = [...selectedImages];
    imagedataArray.splice(index, 1);
    showimageArray.splice(index, 1);
    setSelectedImages(showimageArray);
    setselectedImagesforpost(imagedataArray);
  };

  const filterdata = useSelector(
    (state) => state?.selectcategoryfilterbyid?.listdata
  );
  console.log(filterdata, "filterrrrr");

  const filterdatasubcat = useSelector(
    (state) => state?.findsubcategoryfilter?.listdata
  );
  console.log(filterdatasubcat, "gvdgsvdsg");

  const filterdatatypesubcat = useSelector(
    (state) => state?.findtypesubcategoryfilter?.listdata
  );
  console.log(filterdatatypesubcat, "filterdatatypesubcat");

  const filterbrand = useSelector((state) => state?.brandfilter?.listdata);
  console.log(filterbrand, "filterbrandsass");

  const handleChangehandleChange = (e) => {
    console.log("Category selected", e.target.value);
  };
  console.log(selectedCategoryId, "selectedCategoryId");
  const handleChangecat = (event) => {
    const selectedId = event.target.value;
    setSelectedCategoryId(selectedId);

    const selectedLabel =
      filterdata.find((i) => i._id === selectedId)?.category || "";
    setSelectedCategory(selectedLabel);
  };
  console.log(filterdata, selectedCategory, "asdasdddddddddddd");
  console.log(filterdata, "ddddddddddsdfs");
  // subcategory change

  const handleChangesubcat = (event) => {
    const selectedId = event.target.value;
    setSubcategoryid(selectedId);

    const selectedLabel =
      filterdatasubcat?.find((i) => i._id === selectedId)?.subcategory || "";
    setSubcategory(selectedLabel);
  };

  const handleChangeTypesubcat = (event) => {
    dispatch(
      selectTypesubcategoryFilter({ subcategory_id: event.target.value })
    );
    const selectedId = event.target.value;
    setTypSubcatId(selectedId);

    const selectedLabel =
      filterdatatypesubcat.find((i) => i._id === selectedId)?.typesubcategory ||
      "";
    setTypSubcat(selectedLabel);
    console.log(selectedLabel, "aaaaaaaaaaaa");
  };

  // const brandChange = (event) => {
  //   dispatch(findbrandfilter({ brand: event.target.value }));
  // };
  //   const selectedId = event.target.value;
  //   setBrandcategory(selectedId);

  //   const selectedLabel =
  //     filterbrand.find((i) => i._id === selectedId)?.brand || "";
  //   setbrand(selectedLabel);
  //   console.log(event, "saaaaaaaassaas");
  // };
  // useEffect(() => {
  //   let payload = {
  //     category_id: "",
  //   };
  //   dispatch(selectSubCategoryFilter(payload));
  // }, ["abc"]);
  useEffect(() => {
    console.log(
      selectedCategoryId,
      subcategoryid,
      brandcategory,
      typsubcatId,
      "iddsasasass"
    );
    dispatch(selectCategoryFilter());
    if (subcategoryid) {
      dispatch(selectBrandFilter({ typesubcategory_id: typsubcatId }));
    }
    // if (subcategoryid) {
    //   dispatch(selectTypesubcategoryFilter({ subcategory_id: subcategoryid }));
    // } else if (selectedCategoryId) {
    //   // dispatch(selectSubCategoryFilter({ category_id: selectedCategoryId }));
    // } else {
    // }
  }, [selectedCategoryId, subcategoryid, brandcategory, typsubcatId]);

  console.log(
    selectedCategoryId,
    subcategoryid,
    brandcategory,
    typsubcatId,
    "subcategorydata"
  );

  const handleChange = (e) => {
    console.log(e, "handlechangecalled");
    dispatch(selectSubCategoryFilter({ category_id: e.target.value }));
  };

  const handlesubcategory = (e) => {
    console.log("handlesubchangecalled");
    console.log(e, "fwoiehiuf");
    dispatch(selectTypesubcategoryFilter({ subcategory_id: e.target.value }));
  };

  const brandChange = (e) => {
    // const selectedBrand = categoryName;
    // console.log(selectedBrand, "selectedBrandaa");
    // dispatch(findbrandfilter({ typesubcategory_id: e.target.value }));

    // console.log(e, "zxzxzxzxzxzxzxz");
    dispatch(selectBrandFilter({ type_subcategory_id: e.target.value }));
  };

  console.log(
    filterdata,
    filterdatasubcat,
    filterdatatypesubcat,
    filterbrand,
    "iddsub"
  );

  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        // validate={validate}
        // initialValues={initialValues}
        render={({ handleSubmit, values, form }) => {
          formRef = form;
          return (
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
              {console.log(values, "diuuwhaeud")}
              <Row>
                <Col className="Admin_dashboard margin_bottom" lg={12}>
                  <h3>Add Product</h3>
                </Col>
              </Row>
              <Row>
                <Col lg={9}>
                  <div className=" Addnewpeoduct margin_bottom">
                    <h3 className="margin_bottom"> Basic Information</h3>
                    <div className="margin_bottom">
                      <h5 className="margin_bottom">Product Categories</h5>
                      <div className="d-flex newpeo_div">
                        <Field name="category">
                          {({ input, meta }) => (
                            <select
                              className="addnewproduct_changes right_Addnew"
                              {...input}
                              component="select"
                              onChange={(e) => {
                                input.onChange(e);
                                handleChange(e);
                              }}
                            >
                              <option>Select Category</option>
                              {filterdata &&
                                filterdata?.map((e) => {
                                  console.log(e?.category, "eeeeeeeee");
                                  return (
                                    <>
                                      <option
                                        name="option"
                                        key={e._id}
                                        value={e._id}
                                      >
                                        {e.category}
                                      </option>
                                    </>
                                  );
                                })}
                            </select>
                          )}
                        </Field>
                      </div>
                    </div>
                    <div className="margin_bottom">
                      <h5 className="margin_bottom">Subcategory</h5>
                      <div className="d-flex newpeo_div">
                        <Field name="subcategory">
                          {({ input, meta }) => (
                            <select
                              className="addnewproduct_changes right_Addnew"
                              {...input}
                              component="select"
                              onChange={(e) => {
                                input.onChange(e);
                                // handleChangesubcat(e);
                                handlesubcategory(e);
                                // brandChange(e);
                              }}
                            >
                              <option>Select Subcategory</option>
                              {filterdatasubcat &&
                                filterdatasubcat?.data?.length > 0 &&
                                filterdatasubcat?.data?.map((e) => {
                                  console.log(e?.category, "eeeeeeeee");
                                  return (
                                    <>
                                      <option
                                        name="option"
                                        key={e?._id}
                                        value={e?._id}
                                      >
                                        {e?.subcategory}
                                      </option>
                                    </>
                                  );
                                })}
                            </select>
                          )}
                        </Field>
                      </div>
                    </div>
                    <div className="margin_bottom">
                      <h5 className="margin_bottom">Type Subcategory</h5>
                      <div className="d-flex newpeo_div">
                        <Field name="typesubcategory">
                          {({ input, meta }) => (
                            <select
                              className="addnewproduct_changes right_Addnew"
                              {...input}
                              component="select"
                              onChange={(e) => {
                                input.onChange(e);
                                brandChange(e);
                              }}
                            >
                              <option>Select TypeSubcategorya</option>
                              {filterdatatypesubcat &&
                                filterdatatypesubcat?.map((e) => {
                                  console.log(e, "eeeeeeeee");
                                  return (
                                    <>
                                      <option
                                        name="option"
                                        key={e?._id}
                                        value={e?._id}
                                      >
                                        {e?.typesubcategory}
                                      </option>
                                    </>
                                  );
                                })}
                            </select>
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>
                  <div className="Addnewpeoduct margin_bottom py-4">
                    <div className="margin_bottom">
                      <h5>Product Brand</h5>
                      <div className="d-flex newpeo_div">
                        <Field name="brand">
                          {({ input, meta }) => (
                            <select
                              className="addnewproduct_changes right_Addnew"
                              name="brand"
                              {...input}
                              component="select"
                              onChange={(e) => {
                                input.onChange(e);
                                // brandChange(e);
                              }}
                            >
                              <option>Select Brand</option>
                              {filterbrand &&
                                filterbrand?.map((e) => {
                                  console.log(e, "eeee");
                                  return (
                                    <>
                                      <option
                                        name="option"
                                        key={e._id}
                                        value={e._id}
                                      >
                                        {e.brand}
                                      </option>
                                    </>
                                  );
                                })}
                            </select>
                          )}
                        </Field>
                      </div>
                    </div>
                  </div>

                  <div className="Addnewpeoduct margin_bottom py-4">
                    <div className="margin_bottom">
                      <h5 className="margin_bottom">Title </h5>
                      <Field
                        className="descirption_box"
                        name="title"
                        component="input"
                        type="text"
                        placeholder="Title"
                        required
                        maxLength={200}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={9}>
                  <div className=" Addnewpeoduct margin_bottom py-4">
                    <div>
                      <h5 className="margin_bottom"> Images</h5>

                      <div className="margin_bottom">
                        <h4>Upload image</h4>
                        <div>
                          <input
                            name="images"
                            type="file"
                            className="form-control signup_form_input margin_bottom"
                            onChange={handleImgeFile}
                          />
                          {selectedImages?.length > 0 && (
                            <div>
                              <h4>Selected Images:</h4>
                              <ul className="row">
                                {selectedImages &&
                                  selectedImages?.map((imageUrl, index) => (
                                    <li
                                      key={index}
                                      className=" productupload_item col-md-3"
                                    >
                                      <img
                                        className="productupload_image"
                                        src={imageUrl}
                                        alt={`Image ${index}`}
                                      />
                                      <p
                                        className="addimagecncel_icon"
                                        onClick={() => {
                                          deleteimage(index);
                                        }}
                                      >
                                        <MdCancel className="cancelicon_addproduct" />
                                      </p>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4>Upload thumbnail</h4>
                        <input
                          name="images"
                          type="file"
                          className="form-control signup_form_input"
                          onChange={handlethumbnalfile}
                        />
                        {thumbnail?.length > 0 && (
                          <div>
                            <h2>Selected Images:</h2>
                            <ul className="row">
                              {thumbnail?.map((imageUrl, index) => (
                                <li
                                  key={index}
                                  className=" productupload_item col-md-3"
                                >
                                  <img
                                    className="productupload_image"
                                    src={imageUrl}
                                    alt={`Image ${index}`}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="Addnewpeoduct margin_bottom py-4">
                    <Row>
                      <div className="sku_stok_price">
                        <div>
                          <h3>Price,Stock & Rating</h3>
                        </div>
                        {/* <span>Has Variations?</span> */}
                      </div>
                      <Row>
                        <Col lg={12}>
                          <Row>
                            <Col lg={4} md={6} sm={6}>
                              <h6>Price</h6>
                              <Field
                                className="descirption_box price_flex"
                                name="price"
                                component="input"
                                step="0.01"
                                placeholder="₹"
                                type="text"
                                maxLength={20}
                                required
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Col>
                            <Col lg={4} md={6} sm={6}>
                              <h6>Stock</h6>
                              <Field
                                className="descirption_box price_flex"
                                name="stock"
                                component="input"
                                placeholder="Avalaible stocks"
                                required
                                type="text"
                                maxLength={20}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Col>
                            <Col lg={4} md={6} sm={6}>
                              <h6>Rating</h6>
                              <Field
                                className="descirption_box price_flex"
                                name="rating"
                                component="input"
                                type="text"
                                placeholder="Rating:"
                                required
                                maxLength={4}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Col>
                            <Col lg={4} md={6} sm={6}>
                              <h6>Discount</h6>
                              <Field
                                className="descirption_box price_flex"
                                name="discountpercentage"
                                component="input"
                                type="text"
                                placeholder="discount percentage"
                                required
                                maxLength={4}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Col>
                            <Col lg={4} md={6} sm={6}>
                              <h6>Tax</h6>
                              <Field
                                className="descirption_box price_flex"
                                name="tax"
                                component="input"
                                type="text"
                                placeholder="  "
                                required
                                maxLength={4}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Row>
                  </div>
                  <div className="Addnewpeoduct margin_bottom">
                    <div className="margin_bottom">
                      <h5 className="margin_bottom">Short Description</h5>
                      <Field
                        className="descirption_box"
                        name="description"
                        component="textarea"
                        type="text"
                        placeholder="description"
                        required
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Button className="addproduct_button margin_bottom" type="submit">
                Add product
              </Button>
              {/* <ToastContainer /> */}
            </form>
          );
        }}
      />
    </>
  );
};

export default ProductForm;
