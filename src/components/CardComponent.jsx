import { Link } from 'react-router-dom';
import './CardComponent.css';

export default function CardComponent({ title, price, image, idProd }) {
    return (
        <article className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Precio: ${price}</p>
            <button>
                <Link to={`/product/${idProd}`}>Ver detalles</Link>
            </button>
        </article>
    );
}

