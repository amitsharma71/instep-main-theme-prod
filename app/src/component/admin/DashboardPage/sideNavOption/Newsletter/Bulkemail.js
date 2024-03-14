
//bulkemail
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Field, Form } from "react-final-form";
import Editor from "./CKeditor";

function Bulkemails() {
    const handleSubmit = () => { };
    const initialValues = {
        Subscribers: "",
    };
    return (
        <>
            {" "}
            <div className="admin_toppadding ">
                <Row>
                    <Col className="Admin_dashboard margin_bottom" lg={12}>
                        <h3> Send Bulk Emails</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <Card className="email_body">
                            <Card.Header className="basic_inf"><h4>Basic Information</h4></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <Form onSubmit={handleSubmit} initialValues={initialValues}>
                                        {({ handleSubmit, submitting }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div>
                                                    <Row>
                                                        <Col sm={12} md={12} lg={12}>
                                                            <div className="left_addtoproduct">
                                                                <label className="email_headings" htmlFor="Subscribers">Subscribers</label>
                                                                <Field
                                                                    className="location margin_bottom"
                                                                    name="Subscribers"
                                                                    component="select"
                                                                    required
                                                                >
                                                                    <option></option>
                                                                    <option>Select Subscribers</option>
                                                                    <option>subscribers01@example.com</option>
                                                                    < option>subscribers02@example.com</option>
                                                                    < option>subscribers03@example.com</option>
                                                                </Field>
                                                            </div>
                                                            <div className="left_addtoproduct">
                                                                <label className="email_headings" htmlFor="EmailSubject">
                                                                    Email Subject
                                                                </label>
                                                                <Field
                                                                    className="email_box margin_bottom"
                                                                    name="EmailSubject"
                                                                    component="input"
                                                                    placeholder=""
                                                                />
                                                            </div>
                                                        </Col>{" "}
                                                        <label className="email_headings" >Email Body</label>
                                                        <div>
                                                            <Editor />
                                                        </div>
                                                    </Row>
                                                </div>
                                            </form>
                                        )}
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Button className="email_button" type="submit">Save Stock</Button>
                    </Col>{" "}
                    <Col sm={3}>
                        <Card className="right_variation 
                             ">
                            <Card.Body>
                                <Card.Title className="email_right_bulk">Send Bulk Emails</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <div className='var_edit'>
                                    <Card.Text className="variation_text">
                                        <h4> Basic Information</h4>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Bulkemails;

