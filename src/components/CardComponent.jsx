import AddCarrito from './AddCarrito';
import './CardComponent.css'
import RefBasic from './RefBasic';

export default function CardComponent({children, title }) {
    return (
    <>
        <article className="card">
            {children}
            <h3>{title}</h3>
            <RefBasic />
            <AddCarrito />
        </article>
    </>
    );
}