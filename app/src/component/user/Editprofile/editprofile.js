import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Field, Form } from "react-final-form";
// import { createprofile } from "../../../Redux/action/profileaction";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../../utils/auth";
import { getProductAction } from "../../../Redux/action/getProductDetailAction";
import { singleproduct } from "../../../Redux/action/getsingleProduct";
import { createprofile } from "../../../Redux/action/profileaction";
import { toast } from "react-toastify";
import Spinner from "../loader/spinner";

const Editprofile = () => {
  const dispatch = useDispatch();
  const [profileimgdata, setProfileimgData] = useState("");
  const [selectedthumbnalFile, setselectedthumbnalFile] = useState([]);

  const loading = useSelector((state) => state?.profileslice?.isLoading);
  const [edit, setEdit] = useState(false);

  const profiledata = useSelector(
    (state) => state?.profileslice?.imageData?.data?.data
  );


  console.log(profiledata, "aaaaaaaaaaaaaaaaaaaa");
  const dataId = getUserId();
  const midata = { id: dataId?.id };
  console.log(midata, "dataId");

  useEffect(() => { }, [""]);

  const handleEdit = (name) => {
    setEdit(name);
  };
  const onSubmit = (values) => {
    var formData = new FormData();
    if (values?.id) {
      formData.append("userData", JSON.stringify(values));
      dispatch(createprofile(formData)).then((res) => {
        console.log(res, "fwoemkf");
        toast.success("Successfully Edited !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
    }
    setEdit(false);
  };

  const onSubmitNumber = (values) => {
    if ((values?.number && ((values?.number)?.toString()?.length !== 10))) {
      toast.error("Please check the mobile number")
    } else {
      var formData = new FormData();
      if (values?.id) {
        formData.append("userData", JSON.stringify(values));
        dispatch(createprofile(formData)).then((res) => {
          console.log(res, "fwoemkf");
          toast.success("Successfully Edited !", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        });
      }
      setEdit(false);
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstname) {
      errors.firstname = "Required"
    }
    if (!values.lastname) {
      errors.lastname = "Required"
    }
    if (!values.number) {
      errors.number = "Required"
    }
    return errors;
  };

  const initialValues = () => {
    let init = {
      firstname: profiledata?.firstname,
      lastname: profiledata?.lastname,
      number: profiledata?.number,
      profileimg: profileimgdata,
      email: profiledata?.email,
      id: profiledata?._id,
    };

    return init;
  };

  return (
    <>
      {loading && <Spinner />}
      <>
        <div className="editprofile_main">
          <Row>
            <Form
              onSubmit={onSubmit}
              initialValues={useMemo(() => initialValues(), [profiledata])}
              validate={validate}
              render={({ handleSubmit, values, form }) => (
                <form onSubmit={handleSubmit}>
                  <Col md={8}>
                    <div className="labelalig_n margin_bottom">
                      <h3> Personal Information</h3>
                      {edit !== "name" ? (
                        <div
                          onClick={() => {
                            handleEdit("name");
                          }}
                        >
                          Edit
                        </div>
                      ) : (
                        <p
                          className="editfrpf_cancel"
                          onClick={() => {
                            setEdit(false);
                            form.change("firstname", profiledata?.firstname)
                            form.change("lastname", profiledata?.lastname)
                          }}

                        >
                          Cancel
                        </p>
                      )}
                    </div>

                    <div className="info-fields margin_bottom mb-4">
                      <Field name="firstname">
                        {({ input, meta }) => (
                          <>
                            <div className="alignprofileinputs">
                              <input
                                disabled={edit !== "name"}
                                className="firstname"
                                {...input}
                                placeholder="first name"
                                maxLength={10}
                              />
                              {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                            </div>
                          </>
                        )}
                      </Field>
                      <Field name="lastname">
                        {({ input, meta }) => (
                          <>
                            <div className="alignprofileinputs">
                              <input
                                disabled={edit !== "name"}
                                className="lastname"
                                {...input}
                                placeholder="last name"
                                maxLength={10}
                              />
                              {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                            </div>
                          </>
                        )}
                      </Field>
                      <div>
                        {edit === "name" && (
                          <button
                            // onClick={() => {
                            //   handleSave({
                            //     firstname: values.firstname,
                            //     lastname: values.lastname,
                            //     id: values?.id,
                            //   });
                            // }}
                            className="personalinfo_button"
                            type="submit"
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="labelalig_n">
                      <h5>Email Address</h5>
                      {/* <div>Edit</div> */}
                    </div>
                    <div className="margin_bottom personalotherinput">
                      <Field name="email">
                        {({ input, meta }) => (
                          <>
                            <input
                              className="otherinputalign"
                              disabled="true"
                              {...input}
                              placeholder="Email Address"
                            />
                          </>
                        )}
                      </Field>
                      {/* <div>
                      <button className="personalinfo_button" type="submit">
                        Save
                      </button>
                    </div> */}
                    </div>
                  </Col>
                </form>
              )}
            />
          </Row>
          <Row>
            <Form
              onSubmit={onSubmitNumber}
              initialValues={useMemo(() => initialValues(), [profiledata])}
              validate={validate}
              render={({ handleSubmit, values, form }) => (
                <form onSubmit={handleSubmit}>
                  <Col md={6}>
                    <div className="labelalig_n">
                      <h5>Mobile Number</h5>
                      {edit !== "number" ? (
                        <div onClick={() => handleEdit("number")}>Edit</div>
                      ) : (
                        <p
                          className="editfrpf_cancel"
                          onClick={() => {
                            setEdit(false);
                            form.change("number", profiledata?.number)
                          }}
                        >
                          cancel
                        </p>
                      )}
                    </div>
                    <div className="margin_bottom personalotherinput">
                      <Field name="number">
                        {({ input, meta }) => (
                          <>
                            <div className="alignprofileinputs">
                              <input
                                {...input}
                                disabled={edit !== "number"}
                                className="otherinputalign"
                                placeholder="Mobile Number"
                                type="text"
                                onChange={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    const inputValue = event.target.value.replace(/\D/g, '');
                                    input.onChange(Number(inputValue))
                                  }
                                }}
                                maxLength={10}
                              />
                              {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                            </div>
                          </>
                        )}
                      </Field>
                      <div>
                        {edit === "number" && (
                          <button
                            className="personalinfo_button"
                          // onClick={() => {
                          //   handleSave({
                          //     number: values.number,
                          //     id: values?.id,
                          //   });
                          // }}
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                  </Col>
                </form>
              )}
            />
          </Row>
          <div className="Deactivate-account">Deactivate Account</div>
        </div>
      </>
    </>
  );
};

export default Editprofile;
