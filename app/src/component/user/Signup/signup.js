import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../Redux/action/registerAction";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state?.registerdetail?.listdata);
  console.log(data, "qaa");

  const emailExistsError = useSelector((state) => state?.registerdetail?.error);

  const onSubmit = async (values) => {
    console.log(emailExistsError, "aaaajhjh");
    // if (values.email) {
    //   values.email === emailExistsError;

    // // }
    // if (emailExistsError) {

    // } else if () {

    dispatch(registerAction(values)).then((res) => {
      console.log(res, "asdasdasdasdas");
      if (res?.payload?.msg) {
        alert(res?.payload?.msg);
      } else navigate("/signin");
    });
    // }
  };
  // navigate("/signin");
  const validates = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Required"
    }
    if (!values.lastname) {
      errors.lastname = "Required"
    }
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.number) {
      errors.number = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "must match";
    }
    return errors;
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    number: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  return (
    <div className="container signin_main">
      <Row>
        <Col md={2}></Col>
        <Col md={8} className="main_page">
          <Row>
            <Col md={6} className="signup">
              <div className="left_content">
                <h2>Looks Like You're new here!</h2>
                <p>sign up with your mobile number to get started</p>
                <img
                  src="https://freepngimg.com/thumb/categories/1342.png"
                  alt=""
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="right_content">
                <Form
                  onSubmit={onSubmit}
                  validate={validates}
                  initialValues={initialValues}
                  render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="uppernamealign row">
                        <Field name="firstname">
                          {({ input, meta }) => (
                            <div className="mb-4 col-lg-6 col-sm-12">
                              {/* <label>Your name</label> */}
                              <input
                                className="login_input"
                                {...input}
                                type="text"
                                placeholder="First Name"
                                maxLength={20}
                              />
                              {meta.error && meta.touched && (
                                <p className="star">{meta.error}</p>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="lastname">
                          {({ input, meta }) => (
                            <div className="mb-4 col-lg-6 col-sm-12">
                              {/* <label>Your name</label> */}
                              <input
                                className="login_input"
                                {...input}
                                type="text"
                                placeholder="Last Name"
                                maxLength={20}
                              />
                              {meta.error && meta.touched && (
                                <p className="star">{meta.error}</p>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <Field name="username">
                        {({ input, meta }) => (
                          <div className="mb-4">
                            {/* <label>Your name</label> */}
                            <input
                              className="login_input"
                              {...input}
                              type="text"
                              placeholder="UserName"
                              maxLength={20}
                            />
                            {meta.error && meta.touched && (
                              <p className="star">{meta.error}</p>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="number">
                        {({ input, meta }) => (
                          <div className="mb-4">
                            {/* <label>Your name</label> */}
                            <input
                              className="login_input"
                              {...input}
                              type="text"
                              maxLength={10}
                              placeholder="Mobile No."
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}

                            />
                            {meta.error && meta.touched && (
                              <p className="star">{meta.error}</p>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="email">
                        {({ input, meta }) => (
                          <div className="mb-4">
                            {/* <label>Email</label> */}
                            <input
                              className="login_input"
                              {...input}
                              type="email"
                              placeholder="Email"
                              onChange={(event) => {
                                const inputValue = event.target.value;
                                const maxLength = 25;
                                if (inputValue.length <= maxLength) {
                                  input.onChange(inputValue);
                                }
                              }}
                              maxLength={25}
                            />
                            {meta.error && meta.touched && (
                              <p className="star">{meta.error}</p>
                            )}{" "}
                            {emailExistsError && (
                              <p className="star">{emailExistsError}</p>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="password">
                        {({ input, meta }) => (
                          <div className="mb-4">
                            {/* <label>Password</label> */}
                            <input
                              className="login_input"
                              {...input}
                              type="password"
                              placeholder="Password"
                              onChange={(event) => {
                                const inputValue = event.target.value;
                                const maxLength = 10;
                                if (inputValue.length <= maxLength) {
                                  input.onChange(inputValue);
                                }
                              }}
                              maxLength={10}
                            />
                            {meta.error && meta.touched && (
                              <p className="star">{meta.error}</p>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="confirmpassword">
                        {({ input, meta }) => (
                          <div className="mb-4">
                            {/* <label>Confirm</label> */}
                            <input
                              className="login_input"
                              {...input}
                              type="password"
                              placeholder="Confirm Password"
                              onChange={(event) => {
                                const inputValue = event.target.value;
                                const maxLength = 10;
                                if (inputValue.length <= maxLength) {
                                  input.onChange(inputValue);
                                }
                              }}
                              maxLength={10}
                            />
                            {meta.error && meta.touched && (
                              <p className="star">{meta.error}</p>
                            )}
                          </div>
                        )}
                      </Field>
                      <div className="button_div">
                        <button className="des-but" type="submit">
                          Submit
                        </button>
                        <Link className="reset_button" to="/signin">
                          Already have an Account
                        </Link>
                      </div>
                    </form>
                  )}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
