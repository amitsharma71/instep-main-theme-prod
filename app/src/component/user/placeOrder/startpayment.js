// import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutPage from "./paymentorder";

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
// );

// function Payments() {
//   const options = {
//     mode: "payment",
//     amount: 1099,
//     currency: "usd",
//     // Customizable with appearance API.
//     appearance: {},
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutPage />
//     </Elements>
//   );
// }

// export default Payments;
// // ReactDOM.render(<App />, document.getElementById('root'));
