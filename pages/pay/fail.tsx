import CartContext from "contexts/CartContext";
import { useContext } from "react";

export default function PayFail() {
  const cart = useContext(CartContext);
  return (
    <>
      <p style={{ color: "red" }}>Payment failed.</p>
      <p>for item:</p>
      <p>My Cart:</p>
      <p>{JSON.stringify(cart)}</p>
    </>
  );
}
