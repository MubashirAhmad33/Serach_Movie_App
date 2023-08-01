import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";

const Modal = ({ onClose }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleBuyNow = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-head">Confirmation</h2>
        <p className="modal-desc">Are you sure you want to buy this movie?</p>
        <div className="modal-buttons">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
      {isCheckoutOpen && <CheckoutForm onClose={onClose} />}
    </div>
  );
};

export default Modal;
