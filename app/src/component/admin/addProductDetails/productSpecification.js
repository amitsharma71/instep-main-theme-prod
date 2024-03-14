import React from "react";
import { Button, Col, Row } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Field, Form as FinalForm } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { spacificAction } from "../../../Redux/action/productAction";
import { useParams } from "react-router-dom";

const ProductSpecification = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const data1 = useSelector((state) => state?.spacificationdata?.listdata);
  console.log(data1, "datacheck");

  const data = useSelector((state) => state?.spacificationdata?.listdata);
  console.log(data, "spacificationdata");

  const handleSubmit = (values) => {
    values.ProductID = params.id;
    dispatch(spacificAction(values));
    // dispatch(spacificAction({ ProductID: res?.payload?.data?.product?._id }));
    // console.log(values, "spacificationdata");
  };

  const validate = (values) => {};

  // toast.success("Successfully !", {
  //     position: toast.POSITION.TOP_RIGHT,
  //   });
  return (
    <>
      <FinalForm
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <Row>
              <Col className="Admin_dashboard margin_bottom" lg={12}>
                <h3> Product Specification</h3>
              </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <div className=" Addnewpeoduct margin_bottom">
                  <h3 className="margin_bottom"> </h3>
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">Specification</h5>
                    <div className="d-flex newpeo_div">
                      {/* <Field
                        // className="descirption_box"
                        name="ProductID"
                        component="input"
                        type="hidden"
                        value="{params.id}"
                      /> */}
                      {/* <Field name="ProductID">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            type="text"
                            onChange={(e) => {
                              input.onChange(e);
                            }}
                          >
                            <option>1</option>
                            <option>{params.id}</option>
                          </select>
                        )}
                      </Field> */}
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="color">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                          </select>
                        )}
                      </Field>
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="size">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                            <option>1</option>
                          </select>
                        )}
                      </Field>
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="Material">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        )}
                      </Field>
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="SizeChart">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        )}
                      </Field>
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="DesignStyle">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        )}
                      </Field>
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="category">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        )}
                      </Field>
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="category">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        )}
                      </Field>
                    </div>
                    <div className="d-flex newpeo_div">
                      <Field name="category">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>
                  {/* <div className="margin_bottom">
                    <h5 className="margin_bottom">2</h5>
                    <div className="d-flex newpeo_div">
                      <Field name="subcategory">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            {...input}
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>2</option>
                            <option>2</option>
                            <option>2</option>
                            <option>2</option>
                            <option>2</option>
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="margin_bottom">
                    <h5 className="margin_bottom">3</h5>
                    <div className="d-flex newpeo_div">
                      <Field name="type subcategory">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            {...input}
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option>3</option>
                            <option>3</option>
                            <option>3</option>
                            <option>3</option>
                            <option>3</option>
                          </select>
                        )}
                      </Field>
                    </div>
                  </div> */}
                </div>
                {/* <div className="Addnewpeoduct margin_bottom py-4">
                  <div className="margin_bottom">
                    <h5></h5>
                    <div className="d-flex newpeo_div">
                      <Field name="brand">
                        {({ input, meta }) => (
                          <select
                            className="addnewproduct_changes right_Addnew"
                            name="brand"
                            {...input}
                            component="select"
                            onChange={(e) => {}}
                          >
                            <option></option>
                          </select>
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="Addnewpeoduct margin_bottom">
                  <div className="margin_bottom">
                    <h5 className="margin_bottom"></h5>
                    <Field
                      className="descirption_box"
                      name="description"
                      component="textarea"
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>
                </div> */}
              </Col>
            </Row>
            <Button className="addproduct_button margin_bottom" type="submit">
              Add product
            </Button>
            {/* <ToastContainer /> */}
          </form>
        )}
      />
    </>
  );
};

export default ProductSpecification;
