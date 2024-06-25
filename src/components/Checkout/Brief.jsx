import { useCartContext } from '../../context/CartContext';

const Brief = () => {
    const { cart, totalPrice } = useCartContext();

    return (
        <div className="brief">
            <h3>Order Summary</h3>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${totalPrice}</p>
        </div>
    );
}

export default Brief;
