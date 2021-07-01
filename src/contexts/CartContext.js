import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState({addedItems: []});

    const addItem = (item) => {
        setCart({ ...cart, addedItems:[...cart.addedItems, item]});
   }

    const removeItem = (item) => {
       if (cart.addedItems.includes(item.id)) {
           delete cart.addedItems[item.id];
       }; 
   }

    const clearItems = () => {
       setCart([]);
   }

    const isInCart = (item) => {
       return cart.addedItems.includes(item.id);
   }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearItems, isInCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
