import './ItemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map(item => (
                <div key={item.id} className="item">
                    <Link to={`/item/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
