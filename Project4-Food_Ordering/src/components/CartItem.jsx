import { currenyFormatter } from "../util/formatting";
export default function CartItem({ cart_item, onIncrese, onDecrese }) {
  return (
    <li className="cart-item">
      <p>
        {cart_item.name} - {cart_item.quantity} x{" "}
        {currenyFormatter.format(cart_item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrese}>-</button>
        <span>{cart_item.quantity}</span>
        <button onClick={onIncrese}>+</button>
      </p>
    </li>
  );
}
