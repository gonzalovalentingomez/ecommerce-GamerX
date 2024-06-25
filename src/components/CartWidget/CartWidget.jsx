import './CartWidget.css';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cart } = useCartContext();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="cart-widget">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalItems}</span>
        </div>
    );
}

export default CartWidget;


























/* import './CartWidget.css'

export default function CartWidget() {
    return (
        <>
            <button className='buttonCarrito'><img src="\imgs\carrito-de-compras.png" alt="carrito" className="imgCarrito" />2</button>
        </>
    )
}
 */