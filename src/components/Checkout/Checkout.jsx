import { useState } from 'react';
import './Checkout.css';
import { useCartContext } from '../../context/CartContext';
import { createOrder } from '../../services/firebase'; // Asegúrate de que esta ruta sea correcta

const Checkout = () => {
    const { cart, clearCart, calculateTotal } = useCartContext();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: '',
    });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        if (formData.email !== formData.confirmEmail) {
            alert('Los correos electrónicos no coinciden.');
            return;
        }
        const order = {
            products: cart,
            totalPrice: calculateTotal(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            date: new Date().toISOString(),
        };
        try {
            const orderId = await createOrder(order);
            alert(`Orden realizada con éxito. Número de orden: ${orderId}`);
            clearCart();
            setOrderPlaced(true);
        } catch (error) {
            console.error('Error al crear la orden:', error);
        }
    };

    return (
        <div className="checkout-container">
            {!orderPlaced ? (
                <form onSubmit={handleOrderSubmit}>
                    <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleInputChange} required />
                    <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleInputChange} required />
                    <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleInputChange} required />
                    <input type="email" name="confirmEmail" placeholder="Confirmar correo electrónico" value={formData.confirmEmail} onChange={handleInputChange} required />
                    <button type="submit" disabled={!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.confirmEmail}>Realizar compra</button>
                </form>
            ) : (
                <p>Gracias por tu compra.</p>
            )}
        </div>
    );
};

export default Checkout;
