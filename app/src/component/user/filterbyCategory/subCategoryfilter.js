import React, { useEffect, useState } from "react";
import { Form as FinalForm, reset } from "react-final-form";
import { Accordion } from "react-bootstrap";
import { Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { selectSubCategoryFilter } from "../../../Redux/action/filterBySubcategory";
import {
  selectBrandFilter,
  selectCategoryFilter,
  selectSubcategoryFilter,
} from "../../../Redux/action/filterByCategory";
import { selectTypesubcategoryFilter } from "../../../Redux/action/filterByTypeSubcategory";
import { useParams } from "react-router-dom";
import { findbrandfilter } from "../../../Redux/action/typesubcatpost";
import { AllFilterationData } from "../../../Redux/action/allFilterationAction";
// import Slider from "rc-slider";
import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
import "rc-slider/assets/index.css";

const SubCategoryfilter = () => {
  const dispatch = useDispatch();

  const [isAccordionDisabled, setIsAccordionDisabled] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory, "dsjhhf");
  const [subcategory, setSubcategory] = useState("");
  const [subcategoryid, setSubcategoryid] = useState("");
  const [brandcategory, setBrandcategory] = useState("");
  const [brand, setbrand] = useState("");
  const [typsubcat, setTypSubcat] = useState("");
  const [typsubcatId, setTypSubcatId] = useState("");
  const [value, setValue] = useState([20, 80]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  console.log(brandcategory, "zzzz");

  const [minprices, setMinprices] = useState("");

  const [maxprices, setMaxprices] = useState("");
  console.log(minprices, maxprices, "asasasasasacsddxcvfvc");

  console.log(setMinprices, "dsfdgfhgfdsfg");

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedthumbnalFile, setselectedthumbnalFile] = useState([]);
  const [thumbnail, setthumbnail] = useState("");
  const [subcategorydata, setsubcategorydata] = useState("");

  const { categoryName, subcategoryName } = useParams();

  console.log(categoryName, subcategoryName, "categorynnnsasasasa");

  const filterdata = useSelector(
    (state) => state?.selectcategoryfilterbyid?.listdata
  );
  console.log(filterdata, "filterdatasasasasa");

  const filterdatas = useSelector((state) => state);
  console.log(filterdatas, "filterdatas");

  const filterdatasubcat = useSelector(
    (state) => state?.findsubcategoryfilter?.listdata // *imptt*
  );

  console.log(filterdatasubcat, "filterdatasubcatsss");

  const filterdatatypesubcat = useSelector(
    (state) => state?.findtypesubcategoryfilter?.listdata
  );

  const filterbrand = useSelector(
    (state) => state?.findbrandAdd?.listdata?.data
  );
  console.log(filterbrand, "filterbrand");

  const branddata = useSelector((state) => state);
  console.log(branddata, "branddata");

  const filterdatacheck = useSelector(
    (state) => state?.selectcategoryfilterbyid?.listdata
  );
  console.log(filterdatacheck, "filterdatasasasasa");

  let datacheck = categoryName;

  const filtercatdata = filterdatacheck.filter(
    (item) => item?.id === datacheck
  );

  console.log(filtercatdata, "bhoolja");

  //   const selectedLabel =
  //   filterdata.find((i) => i._id === selectedId)?.category || "";
  // setSelectedCategory(selectedLabel);
  // };

  useEffect(() => {
    // console.log(
    //   // selectedCategoryId,
    //   // subcategoryid,
    //   // brandcategory,
    //   // typsubcatId,
    //   "idds"
    // );
    // if (subcategoryid) {
    //   dispatch(selectBrandFilter({ type_subcategory_id: typsubcatId }));
    // }
    // if (subcategoryid) {
    //   dispatch(selectTypesubcategoryFilter({ subcategory_id: subcategoryid }));
    // } else if (selectedCategoryId) {
    //   // dispatch(selectSubCategoryFilter({ category_id: selectedCategoryId }));
    // } else {
    dispatch(selectCategoryFilter());
    dispatch(selectSubcategoryFilter());
    dispatch(selectBrandFilter());

    // }
  }, [selectedCategoryId, subcategoryid, brandcategory, typsubcatId]);

  // const handleChange = (e) => {
  //   console.log(e, "handlechangecalled");
  //   const selectedcategory = e.target.value;
  //   console.log(selectedcategory, "selectedcategory");
  //   dispatch(selectSubCategoryFilter({ category_id: e.target.value }));
  //   dispatch(AllFilterationData({ categoryId: e.target.value }));
  // };

  useEffect(() => {
    dispatch(selectSubCategoryFilter({ category_id: categoryName }));
  }, [""]);
  const handlesubcategory = (e) => {
    console.log("handlesubchangecalled");
    console.log(e, "fwoiehiuf");
    const selectedSubcategory = e.target.value;
    console.log(selectedSubcategory, "selectedSubcategoryaa");
    dispatch(selectTypesubcategoryFilter({ subcategory_id: e.target.value }));
    dispatch(AllFilterationData({ subcategoryId: e.target.value }));
  };
  const brandChange = (e) => {
    console.log(e, "handletypesubchangecalledasasa");
    // const selectedBrand = e.target.value;
    const selectedBrand = categoryName;
    console.log(selectedBrand, "selectedBrandaa");
    dispatch(findbrandfilter({ type_subcategory_id: e.target.value }));

    dispatch(AllFilterationData({ typesubcategory_id: e.target.value }));
  };

  const handlebrandtype = (e) => {
    console.log("handlesubchangecalled");
    console.log(e, "fwoiehiuf");
    const selectedSubcategory = e.target.value;
    console.log(selectedSubcategory, "selectedSubcategoryaa");
    dispatch(findbrandfilter({ subcategory_id: e.target.value }));
    dispatch(AllFilterationData({ subcategoryId: e.target.value }));
  };

  const bybrandchange = (e) => {
    console.log(e, "handletypesubchangecalled");
    const selectedBrand = e.target.value;
    console.log(selectedBrand, "selectedBrandaa");
    // dispatch(findbrandfilter({ typesubcategory_id: e.target.value }));
    dispatch(selectBrandFilter({ type_subcategory_id: e.target.value }));
    dispatch(AllFilterationData({ brandId: e.target.value }));
  };

  console.log(
    filterdata,
    filterdatasubcat,
    filterdatatypesubcat,
    filterbrand,
    "iddsub"
  );

  const handlePricechange = (e) => {
    console.log(e, "skdjfnkdsjfkjdsgj");
    dispatch(AllFilterationData({ minPrice: minprices, maxPrice: maxprices }));
  };

  const onSubmit = () => {};
  return (
    <FinalForm
      onSubmit={onSubmit}
      // validate={validate}
      initialValues={{ category: categoryName ? categoryName : "" }}
      render={({ values, form }) => {
        return (
          <form>
            <div className="leftfilter_bar">
              <div className="" style={{ padding: "10px 0px 0px 10px" }}>
                <h4> Filters</h4>
              </div>
              <div className="categorieslefftfilter margin_bottom">
                {/* {categoryName} */}
                <div
                  className="margin_bottom"
                  style={{ padding: "10px 0px 0px 10px" }}
                >
                  <h5 className="">Categories</h5>
                  <div
                    className="d-flex newpeo_div"
                    // style={{ padding: "10px 0px 0px 10px" }}
                  >
                    <Field name="category">
                      {({ input, meta }) => (
                        <select
                          style={{ border: "0 " }}
                          className=""
                          {...input}
                          component="select"
                          disabled={categoryName ? true : false}
                          onChange={(e) => {
                            input.onChange(e);
                            // handleChange(e);
                          }}
                        >
                          {/* <option>Select Category</option> */}
                          {filterdata &&
                            filterdata?.map((e) => {
                              console.log(e, "sasasasasa");
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
              </div>
              <div>
                {/* <div className="pricealign margin_bottom">
                  <div>Select Range</div>
                  <input
                    name="price"
                    className="pricerange_filter"
                    type="range"
                    min={minprices}
                    max={maxprices}
                    // value={price}
                    // onChange={}
                  />
                </div> */}
                {/* <Field>
                  {({ input, meta }) => (
                    <div className="d-flex  margin_bottom">
                      <div className="leftpricefilter_wid">
                        <select
                          className="pricefilter_left"
                          name="cars"
                          id="cars"
                          {...input}
                          component="select"
                        >
                          <option value="">Min</option>
                          <option value="">100</option>
                          <option value="">500</option>
                          <option value="">999</option>
                        </select>
                      </div>
                      <div className="priceoption"> to</div>
                      <div className="leftpricefilter_wid">
                        <select
                          className="pricefilter_left"
                          name="cars"
                          id="cars"
                          {...input}
                          component="select"
                        >
                          <option value="">700</option>
                          <option value="">1500</option>
                          <option value="">1999</option>
                          <option value="">2499+</option>
                        </select>
                      </div>
                    </div>
                  )}
                </Field> */}
                {/* <Field>
                  {({ input, meta }) => (
                    <div className="d-flex  margin_bottom">
                      <div className="leftpricefilter_wid">
                        <select
                          className="pricefilter_left"
                          name="minPrice"
                          id="minPrice"
                          value={minprices}
                          onChange={(e) => setMinprices(e.target.value)}
                        >
                          <option value="">Min</option>
                          <option value="100">100</option>
                          <option value="500">500</option>
                          <option value="999">999</option>
                        </select>
                      </div>
                      <div className="priceoption"> to</div>
                      <div className="leftpricefilter_wid">
                        <select
                          className="pricefilter_left"
                          name="maxPrice"
                          id="maxPrice"
                          value={maxprices}
                          onChange={(e) => {
                            // console.log(
                            //   e.target.value,
                            //   "e.target.valuee.target.value"
                            // );
                            setMaxprices(e.target.value);
                          }}
                        >
                          <option value="">Max</option>
                          <option value="700">700</option>
                          <option value="1500">1500</option>
                          <option value="1999">1999</option>
                          <option value="2499+">2499+</option>
                        </select>
                      </div>
                      <button
                        onChange={handlePricechange}
                        //  onClick={() => handlePricechange()}
                      >
                        Apply Filter
                      </button>
                    </div>
                  )}
                </Field> */}
                <div>
                  {/* <div className="pricealign margin_bottom">
                    <div>Select Range</div>
                    <input
                      name="price"
                      className="pricerange_filter"
                      type="range"
                      min={minprices}
                      max={maxprices}
                    />
                  </div> */}
                  <div className="mt-5">
                    <Slider
                      min={0}
                      max={100}
                      step={5}
                      value={value}
                      onChange={handleChange}
                      range
                    />
                    <div className="d-flex gap-5 align-items-center justify-content-center">
                      <span>Min: {value[0]}</span>
                      <span>Max: {value[1]}</span>
                    </div>
                  </div>
                  <Field>
                    {({ input, meta }) => (
                      <>
                        <div className="d-flex  margin_bottom">
                          <div className="leftpricefilter_wid">
                            <select
                              className="pricefilter_left"
                              name="minPrice"
                              id="minPrice"
                              value={minprices}
                              onChange={(e) => setMinprices(e.target.value)}
                            >
                              <option value="">Min</option>
                              <option value="100">100</option>
                              <option value="500">500</option>
                              <option value="999">999</option>
                            </select>
                          </div>
                          <div className="priceoption"> to</div>
                          <div className="leftpricefilter_wid">
                            <select
                              className="pricefilter_left"
                              name="maxPrice"
                              id="maxPrice"
                              value={maxprices}
                              onChange={(e) => setMaxprices(e.target.value)}
                            >
                              <option value="">Max</option>
                              <option value="700">700</option>
                              <option value="1500">1500</option>
                              <option value="1999">1999</option>
                              <option value="2499+">2499+</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}
                  </Field>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="filterbutton"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePricechange();
                    }}
                  >
                    Apply Filter
                  </button>
                </div>
              </div>
              {/* <div className="d-flex newpeo_div">
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
                              <option name="option" key={e._id} value={e._id}>
                                {e.category}
                              </option>
                            </>
                          );
                        })}
                    </select>
                  )}
                </Field>
              </div> */}
              <div>
                {/* <div className="brands_filters">
                  <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion defaultActiveKey="">
                      <Field>
                        {({ input, meta }) => (
                          <Accordion.Item>
                            <Accordion.Header
                              className="leftbrand_filter"
                              style={{ border: "0 " }}
                              {...input}
                              component="select"
                              disabled={
                                categoryName ? true : isAccordionDisabled
                              }
                              onChange={(e) => {
                                input.onChange(e);
                                // handleChange(e);
                              }}
                              eventKey="0"
                            >
                              Select Category
                            </Accordion.Header>
                            {filterdata &&
                              filterdata.map((e) => {
                                return (
                                  <>
                                    <Accordion.Body
                                      name="option"
                                      key={e._id}
                                      value={e._id}
                                    >
                                      {e.category}
                                    </Accordion.Body>
                                  </>
                                );
                              })}
                          </Accordion.Item>
                        )}
                      </Field>

                       <Accordion.Item
                        // onChange={(e) => {
                        //   handleChange(e);
                        // }}
                        eventKey="0"
                      >
                       
                        <Accordion.Header className="leftbrand_filter">
                          Select Category
                        </Accordion.Header>
                        {filterdata &&
                          filterdata.map((e) => (
                            <Accordion.Body name="option" value={e._id}>
                              {e.category}
                            </Accordion.Body>
                          ))}
                          </Accordion.Item>
                    </Accordion>

                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="leftbrand_filter">
                        Subcategory
                      </Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input
                            type="checkbox"
                            className="margin_right"
                            onChange={(e) => handlesubcategory()}
                          />
                          <lable className="fontweight">Subcategory</lable>
                          <br />
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className="leftbrand_filter">
                        BRAND
                      </Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input
                            type="checkbox"
                            className="margin_right"
                            // onChange={(e) => handlesChage()}
                          />
                          <lable className="fontweight">HAVELLES</lable>
                          <br />
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>DISCOUNT</Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">50% or more</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">40% or more</lable>
                          <br />
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">20% or more</lable>
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header> AVAILABILITY </Accordion.Header>
                      <Accordion.Body>
                        <from>
                          <input type="checkbox" className="margin_right" />
                          <lable className="fontweight">
                            Include Out of Stock
                          </lable>
                        </from>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div> */}
                <div className=" Addnewpeoduct margin_bottom">
                  {/* <h3 className="margin_bottom"> Basic Information</h3> */}

                  {/* <div className="margin_bottom">
                    <h5 className="margin_bottom">Product Categories</h5>
                    <div className="d-flex newpeo_div">
                      <Field name="category">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            {...input}
                            component="select"
                            disabled={categoryName ? true : false}
                            onChange={(e) => {
                              input.onChange(e);
                              handleChange(e);
                            }}
                          >
                            <option>Select Category</option>
                            {filterdata &&
                              filterdata?.map((e) => {
                                console.log(e, "sasasasasa");
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
                  </div>  */}

                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Subcategory</h5>
                    <div className="d-flex newpeo_div">
                      <Field name="subcategory">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew newfilter_"
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
                      <Field name="type subcategory">
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
                            <option>Select TypeSubcategory</option>
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
                  {/* <div className="Addnewpeoduct margin_bottom py-4"> */}
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
                              // handlebrandtype(e);
                              bybrandchange(e);
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
                  {/* </div> */}
                </div>
              </div>
            </div>
          </form>
        );
      }}
    />
  );
};

export default SubCategoryfilter;
