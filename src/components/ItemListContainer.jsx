import './ItemListContainer.css'

export default function ItemListContainer({ greeting }) {
    return (
        <>
            <h2 className="titleBienvenida">{greeting}</h2>
        </>
    );
}