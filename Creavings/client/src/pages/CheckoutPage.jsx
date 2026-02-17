import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CheckoutPage = () => {
  const navigate = useState();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  console.log("Checkoutpage", cart);

  return (
    <>
      <div>CheckoutPage</div>
    </>
  );
};

export default CheckoutPage;
