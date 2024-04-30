import { useState, useRef } from 'react';
import './RefBasic.css'

export default function RefBasic() {
    const [cont, setCont] = useState(0);
    const clicks = useRef(0);

    const handleInc = () => {
        setCont(cont + 1);
        clicks.current++;
        console.log('Contador de clicks:' + clicks.current);
};

    const handleDec = () => {
        setCont(cont - 1);
        clicks.current++;
        console.log('Contador de clicks:' + clicks.current);
};

    return (
    <>
        <section className="contBtnRef">
            <button onClick={handleDec} className="btnRef">-</button>
            <p>{cont}</p>
            <button onClick={handleInc} className="btnRef">+</button>
        </section>
    </>
);
}