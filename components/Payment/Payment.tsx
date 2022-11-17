import CartContext from "contexts/CartContext";
import paymaya from "paymaya-js-sdk";
import { useContext, useEffect } from "react";

function Payment(): JSX.Element {
  const publicKey = "pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah";
  // const secretKey = "sk-X8qolYjy62kIzEbr0QRK1h4b4KDVHaNcwMYk39jInSl"
  const cart = useContext(CartContext);
  useEffect(() => {
    paymaya.init(publicKey, true); //TODO move key to env
    paymaya.createCheckout(cart);
  }, []);

  return (
    <div>
      <div>Test Payment</div>
      {publicKey && <p>Your key: {publicKey}</p>}
    </div>
  );
}

export default Payment;
