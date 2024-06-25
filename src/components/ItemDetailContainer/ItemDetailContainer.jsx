import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import { getItem } from '../../services/firebase';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(id).then(data => setItem(data));
    }, [id]);

    return (
        <div className="item-detail-container">
            {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
        </div>
    );
}

export default ItemDetailContainer;
