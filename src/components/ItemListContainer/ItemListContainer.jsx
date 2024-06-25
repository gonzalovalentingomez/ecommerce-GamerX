import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../services/firebase.js'; // Asegúrate de que esta ruta sea correcta
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsFromFirebase = await getProducts();
                setProducts(productsFromFirebase);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="item-list-container">
            <h2>Nuestros Productos</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
