import React, { useState } from 'react';
import './CounterWithHooks.scss';

export default function CounterWithHooks () {

    // const arrayTal =  useState(0);
    // const count = arrayTal[0];
    // const setCount = arrayTal[1];

    const [count, setCount] = useState(0);

    // const valoresIniciales = ['Abel', 'Carlos']
    // const [variable1, variable2] = valoresIniciales;


    return (
        <div className="c-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
            <button className="c-counter-with-hooks__button c-counter-with-hooks__button--small" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
};

