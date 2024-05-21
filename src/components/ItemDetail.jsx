import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../asyncMock';
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
                <p className='cardDetallesPrecio'><strong>Precio: $</strong> {product.price}</p>
            </div>
        </section>
    );
}
