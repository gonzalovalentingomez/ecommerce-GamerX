import { useParams } from 'react-router-dom';
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
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            if (category) {
                const filteredProducts = data.filter((product) => product.category === category);
                setProducts(filteredProducts);
            } else {
                setProducts(data);
            }
        });
    }, [category]);

    return (
        <>
            <h1 className='tituloHome'>{category ? `${category}` : 'Productos'}</h1>
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