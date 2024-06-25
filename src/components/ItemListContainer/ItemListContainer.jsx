import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getItems } from '../../services/firebase';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (
        <div className="item-list-container">
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;


























/* import { useEffect, useState } from 'react';
import CardComponent from '../CardComponent';
import { getProducts } from '../../asyncMock';
import './ItemListContainer.css';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    return (
        <>
            <h1 className='tituloHome'>Productos</h1>
            <article className='productosDestacados'>
                {products.map((product) => (
                    <CardComponent
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        idProd={product.id}
                    />
                ))}
            </article>
        </>
    );
}
 */