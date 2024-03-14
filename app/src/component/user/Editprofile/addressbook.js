import React, { useEffect, useMemo, useState } from 'react'
import { deleteAddress, deliveryGetAction, deliveryaddress, updateAddress } from '../../../Redux/action/deliveryAddress';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../../utils/auth';
import { Button, Col, Dropdown, Modal, Row } from 'react-bootstrap';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Form, Field } from "react-final-form";
import RadioInput from '../placeOrder/radioButton';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import { CiEdit } from 'react-icons/ci';


const AddressBook = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch()

  const userLogin = getUserId();

  const dataId = userLogin.id;

  const addressdata = useSelector((state) => state?.deliveryaddressget?.listdata?.data
  );
  const [editAddressIndex, setEditAddressIndex] = useState(null)


  const addressEditData = useSelector((state) => state?.updateProductData)

  useEffect(() => {
    dispatch(
      deliveryGetAction({
        userID: dataId,
      })
    )
  }, [dataId]);

  const handleRemoveAddress = (_id) => {
    dispatch(deleteAddress({ tableid: _id })).then((res) => {
      if (res?.payload?.success) {
        dispatch(deliveryGetAction({ "userID": dataId }))
        handleClose();
        toast.warning("Successfully Deleted !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    })
  }

  const handleSubmit = (values, form) => {
    console.log(values.mobilenumber, "fdsfdfdgsfdgs")
    console.log(values.AlternateNumber, "fdsfdfdgsfdgs")
    if ((values.mobilenumber && ((values.mobilenumber).toString().length !== 10)) || (values.AlternateNumber && ((values.AlternateNumber).toString().length !== 10))) {
      toast.error("Please check your mobile number")
    } else {
      values.userID = dataId;
      if (editAddressIndex) {
        console.log(values, "in if ")
        //update
        dispatch(updateAddress(values)).then((res) => {
          if (res) {
            dispatch(deliveryGetAction(values));
            form.reset();
            toast.success("Successfully Edited !", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        })
        setEditAddressIndex(null)
      } else {
        //add
        dispatch(deliveryaddress(values)).then((res) => {
          if (res) {
            setFormVisible(false,)
            dispatch(deliveryGetAction(values));
            form.reset();
            toast.success("Successfully Added !", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "Required";
    }
    if (!values.pincode) {
      errors.pincode = "Required";
    }
    if (!values.Locality) {
      errors.Locality = "Required";
    }
    if (!values.addresstype) {
      errors.addresstype = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.state) {
      errors.state = "Required";

      if (!values.landmark) {
        errors.landmark = "Required";
      }
      if (!values.AlternateNumber) {
        errors.AlternateNumber = "Required";
      }
    }
    return errors;
  };

  const init = (e) => {
    let initialValues = {}
    if (editAddressIndex) {
      console.log(addressdata[editAddressIndex - 1], 'testinit')
      initialValues.name = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].name
      initialValues.mobilenumber = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].mobilenumber
      initialValues.pincode = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].pincode
      initialValues.Locality = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].Locality
      initialValues.address = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].address
      initialValues.state = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].state
      initialValues.landmark = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].landmark
      initialValues.AlternateNumber = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].AlternateNumber
      initialValues.addresstype = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].addresstype
      initialValues.tableid = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1]._id
    } else {
      initialValues = ("")
    }
    return initialValues;
  }

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div>
        <h3>Manage Addresses</h3>
        <Row>
          <Col lg={10}>
            {!editAddressIndex &&
              <div
                className="addnew_address margin_bottom"
                onClick={() => {
                  setEditAddressIndex(null)
                  setFormVisible(!isFormVisible)
                }}
              >
                <div>
                  <BsPlusCircleFill className="logindetail_icon" />
                </div>
                <div>
                  <p>Add New</p>
                </div>
              </div>}
            <Form
              onSubmit={handleSubmit}
              validate={validate}
              initialValues={useMemo((e) => init(e), [editAddressIndex])}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <>
                  {(isFormVisible || editAddressIndex) && (
                    <form onSubmit={handleSubmit}>
                      <div className=" margin_bottom row">
                        <Field name="name">
                          {({ input, meta }) => (
                            <div className=" col-md-6">
                              <input
                                {...input}
                                type="text"
                                placeholder="Name"
                                className="inputfiels_place"
                                maxLength={20}
                              />
                              {meta.error && meta.touched && (
                                <span className="text-danger">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="mobilenumber">
                          {({ input, meta }) => (
                            <div className=" col-md-6">
                              <input
                                {...input}
                                type="text"
                                placeholder="10-digit mobile number"
                                className="inputfiels_place"
                                onChange={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    const inputValue = event.target.value.replace(/\D/g, '');
                                    input.onChange(Number(inputValue))
                                  }
                                }}
                                maxLength={10}
                              />
                              {meta.error && meta.touched && (
                                <span className="text-danger">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="row margin_bottom">
                        <Field name="pincode">
                          {({ input, meta }) => (
                            <div className="fields col-md-6">
                              <input
                                {...input}
                                type="text"
                                placeholder="pincode"
                                className="inputfiels_place"
                                onChange={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    const inputValue = event.target.value.replace(/\D/g, '');
                                    input.onChange(Number(inputValue))
                                  }
                                }}
                                maxLength={6}
                              />
                              {meta.error && meta.touched && (
                                <span className="text-danger">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="Locality">
                          {({ input, meta }) => (
                            <div className="fields col-md-6">
                              <input
                                {...input}
                                type="text"
                                placeholder="locality"
                                className="inputfiels_place"
                                maxLength={20}
                              />
                              {meta.error && meta.touched && (
                                <span className="text-danger">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <Field name="address">
                        {({ input, meta }) => (
                          <div className="addressbottommain margin_bottom col-md-12">
                            <input
                              {...input}
                              type="text"
                              placeholder="address"
                              className="addressmaininput"
                              maxLength={50}
                            />
                            {meta.error && meta.touched && (
                              <span className="text-danger">{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      <div className="adsressmaindiv_top margin_bottom row">
                        <Field name="state">
                          {({ input, meta }) => (
                            <div className="fields col-md-6">
                              <input
                                {...input}
                                type="text"
                                placeholder="City/District/Town"
                                className="inputfiels_place"
                                maxLength={20}
                              />
                              {meta.error && meta.touched && (
                                <span className="text-danger">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="row margin_bottom">
                        <Field name="landmark">
                          {({ input, meta }) => (
                            <div className="fields col-md-6">
                              <input
                                {...input}
                                type="text"
                                placeholder="landmark"
                                className="inputfiels_place"
                                maxLength={30}
                              />
                              {meta.error && meta.touched && (
                                <span className="text-danger">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="AlternateNumber">
                          {({ input, meta }) => (
                            <div className="fields col-md-6">
                              <input
                                {...input}
                                type="text"
                                placeholder="Alternate phone (optinal)"
                                className="inputfiels_place"
                                onChange={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    const inputValue = event.target.value.replace(/\D/g, '');
                                    input.onChange(Number(inputValue))
                                  }
                                }}
                                maxLength={10}
                              />
                              {meta.error && meta.touched && (
                                <span className="text-danger">{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <p>Address Type</p>
                      <div className="delivery_place margin_bottom">

                        <div className="form-check">
                          <Field
                            name="addresstype"
                            type="radio"
                            value="Home"
                            id="flexRadioDefault1"
                            component={RadioInput}
                            label="Home (All day delivery)"
                          />
                        </div>
                        <div className="form-check">
                          <Field
                            name="addresstype"
                            type="radio"
                            value="Work"
                            id="flexRadioDefault2"
                            component={RadioInput}
                            label="Work (Delivery between 10 AM-5 PM)"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="addresslocation margin_bottom"
                      >
                        {editAddressIndex ? "UPDATE" : "SAVE"}
                      </button>
                      <button
                        type="cancel"
                        className="addresslocation cancel_button margin_bottom "
                        onClick={() => {
                          setFormVisible(false)
                          setEditAddressIndex(null)
                        }}
                      >
                        cancel
                      </button>
                    </form>
                  )}
                </>

              )}
            />
            <Row>
              {addressdata &&
                addressdata?.map((e, index) => {
                  console.log(e, "mnsdnsfnsj");
                  return (
                    <>
                      <Col lg={12}>
                        <div className="mb-3 getaddressdetal">
                          <div>
                            <div className="selectadressdetail">
                              <p>{e.name}</p>
                              <div>{e.addresstype}</div>
                            </div>
                            <div> <p>{e.mobilenumber}</p></div>
                            <div className="bottomdivaddress">
                              <p>{e.address}</p>
                              <p>{e.pincode}</p>,<p>{e.landmark}</p>,
                              <p>{e.Locality}</p>
                              <p>{e.state}</p>
                            </div>
                          </div>
                          <div>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic"
                              >
                                <BiDotsVerticalRounded />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  <button
                                    className="editdeleter_button"
                                    onClick={() => {
                                      setEditAddressIndex(index + 1)
                                    }}
                                  >
                                    <CiEdit /> Edit
                                  </button>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <button
                                    className="editdeleter_button"
                                    onClick={() => handleShow()}
                                  >
                                    <AiOutlineDelete /> delete
                                  </button>
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
                                        onClick={() => handleRemoveAddress(e._id)}
                                      >
                                        Delete
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>

                      </Col >
                    </>
                  );
                })}
            </Row>
          </Col>
        </Row >
      </div >
    </>
  )
}

export default AddressBook
