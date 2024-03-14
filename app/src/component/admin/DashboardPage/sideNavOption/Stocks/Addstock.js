import { Button, Card, Col, Row } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import { RiMapPinRangeFill } from "react-icons/ri";
import { FiSave } from "react-icons/fi";

const StockFile = () => {
  const handleSubmit = (values) => {
    console.log(values, "values");
  };

  const initialValues = {
    location: "",
    selectproduct: "",
  };

  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Add Stock</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
            {" "}
            <Card className="Stockbasic_information">
              <Card.Header className="Stock_Information">
                <h4> Basic Information</h4>
              </Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <Form onSubmit={handleSubmit} initialValues={initialValues}>
                    {({ handleSubmit, submitting }) => (
                      <form onSubmit={handleSubmit}>
                        <div>
                          <Row>
                            <Col sm={12} md={12} lg={12}>
                              <div className="left_addtoproduct">
                                <label htmlFor="location">Location</label>
                                <Field
                                  className="location"
                                  name="location"
                                  component="select"
                                  required
                                >
                                  <option></option>
                                  <option>Select Location</option>
                                  <option>Location Two</option>
                                  <option>Default Location</option>
                                </Field>
                              </div>
                              <div className="left_addtoproduct">
                                <label htmlFor="Selectproduct">
                                  Select Product:
                                </label>
                                <Field
                                  className="location"
                                  name="Selectproduct"
                                  component="select"
                                  required
                                >
                                  <option></option>
                                  <option>Select Product</option>
                                  <option>
                                    Rambutan Sweet delicious Fruit
                                  </option>
                                  <option>Brit Premium Cat Indoor</option>
                                  <option>
                                    Lizol Floor Cleaner Cirtus Disinfectant
                                    Surface
                                  </option>
                                </Field>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Button
                          className="Admin_rbutton icon_s"
                          variant="secondary"
                        >
                          <p>
                            <FiSave /> Save Stock
                          </p>
                        </Button>
                      </form>
                    )}
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="right_information">
              <Card.Body>
                <Card.Title>Stock Information</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text className="stock_icon">
                  <RiMapPinRangeFill /> Stock Information
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default StockFile;
