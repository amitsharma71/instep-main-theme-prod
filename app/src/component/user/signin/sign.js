import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../Redux/action/loginAction";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();

  // const data = useSelector((state) => state?.logindatacheck?.listdata);
  // console.log(data, "dataforcheck");

  const validates = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const onSubmit = (values, res) => {
    dispatch(loginAction(values)).then((response) => {
      console.log(response, "response");
      const datas = response.payload?.loginStatus;
      console.log(datas, "datassss");
      const data1 = response;
      console.log(data1, "wahpona");
      const datass = response.payload.err;
      console.log(datass, "dataww");
      Token = response.payload.token;
      console.log(Token, "tokenes");
      localStorage.setItem("token", JSON.stringify(Token));
      console.log(values, "token");
      if (datas === true) {
        window.location.href = "http://localhost:3000";
      } else {
        alert(datass);
      }

      // window.location.href = "http://localhost:3000";
    });
  };

  const res = useSelector((state) => state?.logindatacheck?.listdata);
  let Token;
  console.log(res, "fghjkjhgfghjkjhgfd");
  const isLoading = useSelector((state) => state?.logindatacheck);
  console.log(isLoading, "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqaaa");

  return (
    <>
      <div className="container signin_main">
        <Row>
          <Col md={2}></Col>
          <Col md={8} className="main_page">
            <Row>
              <Col md={6} className="signup">
                <div className="left_content">
                  <h2>Login</h2>
                  <p>
                    Get access to your Orders, Whishlist and Recommendations
                  </p>
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
                    render={({
                      handleSubmit,
                      form,
                      submitting,
                      pristine,
                      values,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <Field name="email">
                          {({ input, meta }) => (
                            <div className="mb-4">
                              {/* <label className="signin_formcontent">Username</label> */}
                              <input
                                {...input}
                                type="text"
                                placeholder="Username"
                                className="login_input"
                                maxLength={20}
                              />
                              {meta.error && meta.touched && (
                                <span className="star">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="password">
                          {({ input, meta }) => (
                            <div className="mb-4">
                              {/* <label className="signin_formcontent">Password</label> */}
                              <input
                                {...input}
                                type="password"
                                placeholder="Password"
                                className="login_input"
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
                                <span className="star">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <div className="button_div">
                          <button className="des-but" type="submit">
                            Submit
                          </button>
                          {/* <button
                            className="reset_button"
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                          >
                            Reset
                          </button> */}
                        </div>
                      </form>
                    )}
                  />
                </div>
                <div className="create_accnt">
                  <p>
                    New to Instepcart?
                    <Link to="/signup">Create an account</Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignIn;
