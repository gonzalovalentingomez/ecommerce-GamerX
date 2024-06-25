import { useCartContext } from '../../context/CartContext';

const AddItemButton = ({ item }) => {
    const { addItem } = useCartContext();

    const handleClick = () => {
        addItem(item);
    }

    return (
        <button onClick={handleClick}>Add to Cart</button>
    );
}

export default AddItemButton;
