// import React from "react";
// import { ExpressCheckoutElement } from "@stripe/react-stripe-js";

// const CheckoutPage = () => {
//   const onConfirm = () => {};

//   return (
//     <div id="checkout-page">
//       <ExpressCheckoutElement onConfirm={onConfirm} />
//     </div>
//   );
// };

// export default CheckoutPage;



import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Buy React now!</p>
                <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹500
                </button>
            </header>
        </div>
    );
}

export default App;