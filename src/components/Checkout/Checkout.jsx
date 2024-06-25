import './Checkout.css';
import { useCartContext } from '../../context/CartContext';
import { createOrder } from '../../services/firebase.js';
import Brief from './Brief';

const Checkout = () => {
    const { cart, totalPrice } = useCartContext();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [orderId, setOrderId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email !== emailConfirm) {
            alert("Emails don't match");
            return;
        }
        const order = {
            items: cart,
            total: totalPrice,
            name,
            surname,
            phone,
            email,
            date: new Date().toISOString(),
            status: 'generated'
        };
        const id = await createOrder(order);
        setOrderId(id);
    }

    return (
        <div className="checkout">
            {orderId ? (
                <p>Order ID: {orderId}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Brief />
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                    <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="email" placeholder="Confirm Email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} required />
                    <button type="submit">Complete Purchase</button>
                </form>
            )}
        </div>
    );
}

export default Checkout;
