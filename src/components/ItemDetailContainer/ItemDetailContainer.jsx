import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { getProduct } from '../../services/firebase.js'; // Asegúrate de que esta ruta sea correcta
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productFromFirebase = await getProduct(id);
                setProduct(productFromFirebase);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} /> : <p>Cargando detalle del producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;
