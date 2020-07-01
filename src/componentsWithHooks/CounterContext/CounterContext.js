import React, { useState } from 'react';
import './CounterContext.scss';
import CounterContext from "../CounterContext";

export const CounterWithContext =  () => {
    const initialValue = Number(React.useContext(CounterContext));

    const [count, setCount] = useState(initialValue);

    return (
        <div className="c-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};
