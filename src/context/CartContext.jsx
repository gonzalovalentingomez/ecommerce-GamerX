import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}
