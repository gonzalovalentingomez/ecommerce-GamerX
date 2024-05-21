import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import { getProducts } from '../asyncMock';
import './Category.css';

export default function Category() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            const filteredProducts = data.filter((product) => product.category === category);
            setProducts(filteredProducts);
        });
    }, [category]);

    return (
        <>
            <h1 className='tituloCat'>{category}</h1>
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
