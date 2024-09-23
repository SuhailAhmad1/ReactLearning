import { useReducer } from "react";
import { Children } from "react";
import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart:() => {}
});

function cartReducer(state, action) {

  if (action.type === "ADD_ITEM") {
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (existingCartItem > -1) {
      const existingItem = state.items[existingCartItem];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItem] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItem, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR_CART'){
    state = {
      ...state,
      items: []
    }
    return state
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item){
    dispatchCartAction({
        'type':"ADD_ITEM",
        'item': item
    })
  }

  function removeItem(id){
    dispatchCartAction({
        'type': "REMOVE_ITEM",
        'id': id
    })
  }

  function clearCart(){
    dispatchCartAction({
      'type': "CLEAR_CART"
    })
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
