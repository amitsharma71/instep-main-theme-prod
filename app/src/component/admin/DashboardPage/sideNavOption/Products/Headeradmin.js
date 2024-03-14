import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { adminPostheading, admingetheading, headingDelete} from "../../../../../Redux/action/adminheader";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUserId } from "../../../../../utils/auth";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

function Headeradmin() {
  const dispatch = useDispatch();

  const [logoimage, setlogoimage] = useState([]);

  const [SelectedImages, setSelectedImages] = useState([]);

  const getadminid = getUserId();

  const onSubmit = (values, form) => {

    const payload = {
      adminID: getadminid.id,
      heading: values?.heading,
      heading1: values?.heading1,
      Email: values?.Email,
      sitename: values?.sitename,
      logo: logoimage,
    };

    if (payload) {

      const formData = new FormData();
      formData.append("adminData", JSON.stringify(payload));
      formData.append("logo", logoimage.file);

      if (formData) {
        dispatch(adminPostheading(formData)).then((res) => {
          if (res?.payload?.data?.success == true) {
            toast.success("Successfully !", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setSelectedImages("");
            setlogoimage("");
            form.reset()
          }
        });
      }
    }
  };

  const validate = (values) => {
    let error = {};

    if (!values.heading) {
      error.heading = "Required";
    }
    // if (!values.heading1) {
    //   error.heading1 = "Required";
    // }
    if (!values.Email) {
      error.Email = "Required";
    }
    // if (!values.sitename) {
    //   error.sitename = "Required";
    // }
    return error;
  };

  const handleImgeFile = (e) => {
    const files = e.target.files;
    const logo = e.target.files[0];
    if (!logo) {
      console.log("image is Required");
      return false;
    }
    if (!logo.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      toast.error("upload file in the form of jpg, jpeg or png")
      setSelectedImages([])
      e.target.value = null;
      return false;
    }

    const maxSizeKB = 50;
    if (logo.size > maxSizeKB * 1024) {
      toast.error("the maximum file size allowed (50KB).");
      setSelectedImages([])
      e.target.value = null;
      return false;
    }

    const uniqueId = Date.now();
    let name = e.target.files[0].name;

    const filename = uniqueId + "_" + name;

    let file = new File(files, filename);
    setlogoimage({ file: file });

    let imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };


  const headings = useSelector(
    (state) => state?.adminheading?.listdata?.data?.data
  );


  const handleHeadingDelete = (_id) => {
    dispatch(headingDelete({ tableid: _id })).then((res) => {
      if (res?.payload?.data?.success) {
        handleClose(false)
      }
    })
  }

  useEffect(() => {
    dispatch(admingetheading({ adminID: "64b8ccde661f313c3be26a41" }));
  }, []);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Row>
        <div className="admin_toppadding">
          <Col className="Admin_dashboard" lg={12}>
            <h3> Add User Navbar Heading & Logo's</h3>
          </Col>
        </div>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new margin_bottom">
            <Row>
              <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Col lg={12}>
                      <Field name="heading">
                        {({ input, meta }) => (
                          <div className="headaerfields margin_bottom">
                            <label>Heading </label>
                            <input {...input} className="ctegorysearc_h" type="text" placeholder="heading " maxLength={40} />
                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </Col>
                    <Col lg={12}>
                      <Field name="heading1">
                        {({ input, meta }) => (
                          <div className="headaerfields margin_bottom">
                            <label> Other Heading </label>
                            <input {...input} className="ctegorysearc_h" type="text" placeholder="Other Heading " maxLength={40} />
                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </Col>
                    <Col lg={12}>
                      <Field name="Email">
                        {({ input, meta }) => (
                          <div className="headaerfields margin_bottom">
                            <label>Email </label>
                            <input {...input} className="ctegorysearc_h" type="text" placeholder="Email " maxLength={40} />
                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </Col>
                    <Col lg={12}>
                      <div>
                        <h4>Logo</h4>
                        <input
                          name="images"
                          type="file"
                          className="form-control signup_form_input margin_bottom"
                          onChange={handleImgeFile}
                        />
                        {SelectedImages?.length > 0 && (
                          <div>
                            <h4>Selected logo:</h4>
                            <ul className="row">
                              {SelectedImages?.map((imageUrl, index) => (
                                <li key={index} className=" productupload_item col-md-3">
                                  <img
                                    className="productupload_image"
                                    src={imageUrl}
                                    alt={`Image ${index}`}
                                  />
                                  <p className="addimagecncel_icon"></p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col lg={12}>
                      <Field name="sitename">
                        {({ input, meta }) => (
                          <div className="headaerfields margin_bottom">
                            <label>Site Name </label>
                            <input {...input} className="ctegorysearc_h" type="text" placeholder="sitename " maxLength={40} />
                            {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                          </div>
                        )}
                      </Field>
                    </Col>
                    <div className="buttons d-flex justify-content-end">
                      <button className="addcatsubit_button" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              />

            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new">
            <Table responsive="lg" className="position-relative">
              <thead>
                <tr>
                  <th>Heading</th>
                  <th>Logo</th>
                  <th>Email</th>
                  <th className="d-flex justify-content-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {isLoading ? ( */}
                {/* <div className="table_Spinner productspinner">
                      <Spinner animation="border" variant="dark" />
                    </div> */}
                {/* ) : ( */}

                <tr>
                  <td>
                    {headings && headings?.heading}
                  </td>
                  <td>
                    <img
                      src={`http://localhost:5000/logo/${headings?.logo}`}
                      alt=""
                      style={{ width: "92px" }}
                    />
                  </td>
                  <td>{headings && headings?.Email}</td>
                  <td>
                    {headings && headings && (
                      <div className="d-flex justify-content-end">
                        <MdDelete
                          className="deleteicn_forpro"
                          onClick={() => handleShow()}
                        />
                      </div>
                    )}
                    <Modal
                      className="removerfromcart_modal"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={show}
                      onHide={handleClose}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Delete Item</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Are you sure you want to Delete this item
                        ?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          className="cancelbut_removecart"
                          variant="secondary"
                          onClick={handleClose}
                        >
                          CANCEL
                        </Button>
                        <Button
                          className="removebut_cart"
                          variant="primary"
                          onClick={() => handleHeadingDelete(headings?._id)}
                        >
                          Delete
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>

                {/* </> */}
                {/* ); */}
                {/* }) */}
                {/* )} */}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

    </div >
  );
}

export default Headeradmin;
