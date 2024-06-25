import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, totalPrice, removeItem } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="cart">
                <p>Your cart is empty</p>
                <Link to="/">Go to Home</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <p>{item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Total: ${totalPrice}</p>
            <Link to="/checkout">Proceed to Checkout</Link>
        </div>
    );
}

export default Cart;
