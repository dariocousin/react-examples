import React, { useState } from 'react';
import './CounterWithHooks.scss';

export function CounterWithHooks (props) {

    // const arrayTal =  useState(0);
    // const count = arrayTal[0];
    // const setCount = arrayTal[1];

    const [count, setCount] = useState(props.initialValue);


    return (
        <div className="c-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

