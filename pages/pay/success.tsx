import CartContext from "contexts/CartContext";
import { useContext } from "react";

export default function PaySuccess() {
  const cart = useContext(CartContext);
  return (
    <>
      <p style={{ color: "green" }}>Payment success!</p>
      <p>for item:</p>
      <p>My Cart:</p>
      <p>{JSON.stringify(cart)}</p>
    </>
  );
}
