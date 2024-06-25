import './ItemDetail.css';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <Description description={item.description} />
            <ItemQuantitySelector item={item} />
            <AddItemButton item={item} />
        </div>
    );
}

export default ItemDetail;
























/* import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock';
import RefBasic from '../RefBasic';
import './ItemDetail.css'

export default function ItemDetail() {
    const { prodId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const productData = getProduct(prodId);
        setProduct(productData);
    }, [prodId]);

    return (
        <section className='contDetalles'>
            <h1 className='tituloDetalles'>Detalles del Producto</h1>
            <div className='cardDetalles'>
                <img src={product.image} alt={product.title} />
                <h3>Nombre: {product.title}</h3>
                <p className='cardDetallesDesc'><strong>Descripción:</strong> {product.description}</p>
                <p className='cardDetallesCat'>Categoría: {product.category}</p>
                <RefBasic />
                <p className='cardDetallesPrecio'><strong>Precio: $</strong> {product.price}</p>
            </div>
        </section>
    );
}
 */
