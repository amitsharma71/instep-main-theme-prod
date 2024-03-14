import React from "react";
import { Col, Row } from "react-bootstrap";

const Shipping = () => {
  return (
    <div className="container">
      <div className=" slider_col margin_bottom">
        <Row>
          <Col lg={12}>
            <div className="paymentdetail_main">
              <div className="margin_bottom">
                <h5>Shipping</h5>
              </div>
              <div>
                <h6>What are the delivery charges?</h6>
                <ul>
                  <li>Delivery charge varies with each Seller.</li>
                  <li>
                    Sellers incur relatively higher shipping costs on low value
                    items. In such cases, charging a nominal delivery charge
                    helps them offset logistics costs. Please check your order
                    summary to understand the delivery charges for individual
                    products.
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  Why does the delivery date not correspond to the delivery
                  timeline of X-Y business days?
                </h6>
                <ul>
                  <li>
                    It is possible that the Seller or our courier partners have
                    a holiday between the day your placed your order and the
                    date of delivery, which is based on the timelines shown on
                    the product page. In this case, we add a day to the
                    estimated date. Some courier partners and Sellers do not
                    work on Sundays and this is factored in to the delivery
                    dates.
                  </li>
                </ul>
              </div>
              <div>
                <h6>What is the estimated delivery time?</h6>
                <ul>
                  <li>
                    Sellers generally procure and ship the items within the time
                    specified on the product page. Business days exclude public
                    holidays and Sundays.
                  </li>
                  Estimated delivery time depends on the following factors:
                  <li>The Seller offering the product</li>
                  <li>Product's availability with the Seller</li>
                  <li>
                    The destination to which you want the order shipped to and
                    location of the Seller.
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  Are there any hidden costs (sales tax, octroi etc) on items
                  sold by Sellers on Instepcart?
                </h6>
                <ul>
                  <li>
                    There are NO hidden charges when you make a purchase on
                    Instepcart. List prices are final and all-inclusive. The
                    price you see on the product page is exactly what you would
                    pay.
                  </li>
                  <li>
                    Delivery charges are not hidden charges and are charged (if
                    at all) extra depending on the Seller's shipping policy.
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  Why does the estimated delivery time vary for each seller?
                </h6>
                <ul>
                  <li>
                    You have probably noticed varying estimated delivery times
                    for sellers of the product you are interested in. Delivery
                    times are influenced by product availability, geographic
                    location of the Seller, your shipping destination and the
                    courier partner's time-to-deliver in your location.
                  </li>
                  <li>
                    Please enter your default pin code on the product page (you
                    don't have to enter it every single time) to know more
                    accurate delivery times on the product page itself.
                  </li>
                </ul>
              </div>
              <div>
                <h6>Seller does not/cannot ship to my area. Why?</h6>
                <ul>
                  <li>
                    Please enter your pincode on the product page (you don't
                    have to enter it every single time) to know whether the
                    product can be delivered to your location.
                  </li>
                  <li>
                    If you haven't provided your pincode until the checkout
                    stage, the pincode in your shipping address will be used to
                    check for serviceability.
                  </li>
                  Whether your location can be serviced or not depends on
                  <li>Whether the Seller ships to your location</li>
                  <li>
                    Legal restrictions, if any, in shipping particular products
                    to your location
                  </li>
                  <li>
                    The availability of reliable courier partners in your
                    location
                  </li>
                </ul>
              </div>
              <div>
                <h6>Why is the CoD option not offered in my location?</h6>
                <ul>
                  <li>
                    Availability of CoD depends on the ability of our courier
                    partner servicing your location to accept cash as payment at
                    the time of delivery.
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  I need to return an item, how do I arrange for a pick-up?
                </h6>
                <ul>
                  <li>
                    Returns are easy. Contact Us to initiate a return. You will
                    receive a call explaining the process, once you have
                    initiated a return.
                  </li>
                  <li>
                    Wherever possible Ekart Logistics will facilitate the
                    pick-up of the item. In case, the pick-up cannot be arranged
                    through Ekart, you can return the item through a third-party
                    courier service. Return fees are borne by the Seller..
                  </li>
                </ul>
              </div>
              <div>
                <h6>
                  What do the different tags like "In Stock", "Available" mean?
                </h6>
                <h6>'In Stock'</h6>
                <ul>
                  <li>
                    For items listed as "In Stock", Sellers will mention the
                    delivery time based on your location pincode (usually 2-3
                    business days, 4-5 business days or 4-6 business days in
                    areas where standard courier service is available). For
                    other areas, orders will be sent by Registered Post through
                    the Indian Postal Service which may take 1-2 weeks depending
                    on the location.
                  </li>
                </ul>
                <h6>'Available'</h6>
                <ul>
                  <li>
                    The Seller might not have the item in stock but can procure
                    it when an order is placed for the item. The delivery time
                    will depend on the estimated procurement time and the
                    estimated shipping time to your location.
                  </li>
                </ul>
                <h6>'Out of Stock'</h6>
                <ul>
                  <li>
                    Currently, the item is not available for sale. Use the
                    'Notify Me' feature to know once it is available for
                    purchase.
                  </li>
                </ul>
                <h6>'Imported'</h6>
                <ul>
                  <li>
                    Sometimes, items have to be sourced by Sellers from outside
                    India. These items are mentioned as 'Imported' on the
                    product page and can take at least 10 days or more to be
                    delivered to you.
                  </li>
                </ul>
                <h6>'Back In Stock Soon'</h6>
                <ul>
                  <li>
                    The item is popular and is sold out. You can however 'book'
                    an order for the product and it will be shipped according to
                    the timelines mentioned by the Seller.
                  </li>
                </ul>
                <h6>'Temporarily Unavailable'</h6>
                <ul>
                  <li>
                    The product is currently out of stock and is not available
                    for purchase. The product could to be in stock soon. Use the
                    'Notify Me' feature to know when it is available for
                    purchase.
                  </li>
                </ul>
                <h6>'Permanently Discontinued'</h6>
                <ul>
                  <li>
                    This product is no longer available because it is obsolete
                    and/or its production has been discontinued.
                  </li>
                </ul>
                <h6>'Out of Print'</h6>
                <ul>
                  <li>
                    This product is not available because it is no longer being
                    published and has been permanently discontinued.
                  </li>
                </ul>
                <h6>Does Instepcart deliver internationally?</h6>
                <ul>
                  <li>
                    As of now, Instepcart doesn't deliver items internationally.
                  </li>
                  <li>
                    You will be able to make your purchases on our site from
                    anywhere in the world with credit/debit cards issued in
                    India and -- other countries, but please ensure the delivery
                    address is in India.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Shipping;
