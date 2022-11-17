import CartContext from "contexts/CartContext";
import { useContext } from "react";

export default function PayCancel() {
  const cart = useContext(CartContext);
  return (
    <>
      <p style={{ color: "yellow" }}>Payment cancelled.</p>
      <p>for item:</p>
      <p>My Cart:</p>
      <p>{JSON.stringify(cart)}</p>
    </>
  );
}
