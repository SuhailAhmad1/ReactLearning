import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleOpenCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="SumatoFood" />
        <h1>SumatoFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleOpenCart}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
}
