import { Col, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

const GrievanceRedressal = () => {
    const Click = () => {

    }
    return (<>
        <div className="container">
            <div className=" slider_col margin_bottom">
                <Row>
                    <Col lg={12}>
                        <div className="paymentdetail_main">
                            <h5>Instepcart is duty bound to provide fair treatment to our Consumer and Consumer grievances.
                                <br></br><br></br>What does "Grievance" mean?</h5>
                            <div>
                                <ul>
                                    <li>
                                        Grievance means any issue related to the product/service which has been availed by the consumer from the Instepcart Platform and consumer is seeking resolution for the same.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h6>In case of any query or complaint the Consumer can approach us and reach out to us through ‘Contact us’ and ‘Help Centre’ tab available on this page.x</h6>
                                <ul>
                                    <h6>Journey:</h6>
                                    <li>
                                        Click on ‘ <Link to="/contactus">Contact Us</Link>’ or ‘<Link to="/contactus">Help Centre</Link>’ tab
                                    </li>
                                    <li>
                                        It will open to Instepcart Help Center | 24x7 Customer Care Support
                                    </li>
                                    <li>
                                        Choose from Type of Issue / Help Topics
                                    </li>
                                    <li>
                                        Submit
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h6><b>If your query / complaint not resolved needs to be escalated :</b> As per the applicable laws, Instepcart has appointed a “Grievance Officer” to address your grievances.</h6>
                                <ul>
                                    <li>
                                        <b> Here are the details for Grievance officer:<br></br>
                                            Mr. Shremanth M<br></br>

                                            Designation: Senior Manager<br></br>

                                            Instepcart Internet Pvt Ltd Block B (Begonia),<br></br>

                                            8th Floor Embassy Tech Village,<br></br>

                                            Outer Ring Road, Devarabeesanahalli Village,<br></br>

                                            Varthur Hobli, Bengaluru East Taluk,<br></br>

                                            Bengaluru District, Karnataka : 560103, India<br></br>

                                            Contact no. : 044-45614700<br></br>
                                        </b>
                                    </li>
                                </ul>
                            </div>
                            <div>

                                <ul>
                                    <ul><li>
                                        Our ‘Grievance Redressal Mechanism’ is as follows:
                                    </li>
                                        <ul>
                                            <li>
                                                Upon the receipt of a Consumer Grievance on the channels specified above.
                                            </li>
                                            <ul>
                                                <li>
                                                    The Consumer shall receive an acknowledgment for its grievance within 48 (Forty-Eight) hours through email OR phone call or SMS, and
                                                </li>
                                                <li>
                                                    The Consumer shall receive a system generated “Unique ID” to track the grievance status
                                                </li>
                                            </ul>


                                        </ul>



                                        <li>
                                            “Consumer Care” and “Grievance Officer” shall take all the best endeavors to resolve the grievance as expeditiously within the timeline as prescribed in the applicable laws.
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            A Grievance will be considered as closed and disposed-off and in any of the following instances, namely:
                                        </li>
                                        <ul>
                                            <li>
                                                When the consumer is communicated by Consumer Care / Grievance Officer / any other person associated with the website and offers solutions to its grievance
                                            </li>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>
                            <h5>For more details, please visit Terms of Use</h5>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>)
}
export default GrievanceRedressal