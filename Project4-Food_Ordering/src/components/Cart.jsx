import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";
import { currenyFormatter } from "../util/formatting.js";
import Button from "./UI/Button";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((total_amount, item) => {
    return total_amount + item.price * item.quantity;
  }, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleOpenCheckout() {
    userProgressCtx.showCheckOut();
  }

  function handleIncrease(item) {
    cartCtx.addItem(item);
  }

  function handleDecrease(id) {
    cartCtx.removeItem(id);
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            cart_item={item}
            onIncrese={() => {
              handleIncrease(item);
            }}
            onDecrese={() => handleDecrease(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currenyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartTotal ? (
          <Button onClick={handleOpenCheckout}>Go to Checkout</Button>
        ) : undefined}
      </p>
    </Modal>
  );
}
