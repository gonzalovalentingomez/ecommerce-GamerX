import { useState } from 'react';

const ItemQuantitySelector = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="quantity-selector">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
    );
}

export default ItemQuantitySelector;
