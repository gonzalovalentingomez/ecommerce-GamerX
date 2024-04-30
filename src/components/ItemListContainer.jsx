import CardComponent from './CardComponent';
import ImgCardComponent from './ImgCardComponent';
import './ItemListContainer.css'

export default function ItemListContainer({}) {
    return (
        <>
            <section className='productosDestacados'>
                <div>
                    <CardComponent title="PC Gamer">
                        <ImgCardComponent/>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent title="PC Diseño">
                        <ImgCardComponent />
                    </CardComponent>
                </div>
                <div>
                    <CardComponent title="Notebook">
                        <ImgCardComponent />
                    </CardComponent>
                </div>
                <div>
                    <CardComponent title="Monitor">
                        <ImgCardComponent />
                    </CardComponent>
                </div>
            </section>
        </>
    );
}