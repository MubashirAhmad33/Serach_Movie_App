import React from "react";
import StripeCheckout from "react-stripe-checkout";

const CheckoutForm = ({ onClose }) => {
  const handlePayment = async (token) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          amount: 1000,
          currency: "USD",
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Payment successful
        console.log("Payment successful!");
        onclose();
        // Perform further actions or close the modal, etc.
      } else {
        // Payment failed
        console.log("Payment failed.");

        // Perform actions for failed payments, show error message, etc.
      }
    } catch (error) {
      console.log(error);
      // Handle error (optional)
    }
  };

  return (
    <div className="checkout-form">
      <h2>Checkout Form</h2>
      <StripeCheckout
        stripeKey="pk_test_51NaDKXCkM0cENOGbP6QFInhf4wDwvmVTyrairx59ip1ImrIK0bTK6v0aqx4KP6cnYIoa0TPdlUDpD9DN19343K0700O1ijxzok"
        token={handlePayment}
        amount={1000} // Amount in cents (e.g., $10.00)
        currency="USD"
      >
        <button type="button" className="payment">
          Submit Payment
        </button>
      </StripeCheckout>
    </div>
  );
};

export default CheckoutForm;
