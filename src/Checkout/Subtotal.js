
import React from "react";
import "./Subtotal.css";
// import { Navigate, withRouter } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Home/StateProvider";
import { getBasketTotal } from "../Home/reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=>navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;