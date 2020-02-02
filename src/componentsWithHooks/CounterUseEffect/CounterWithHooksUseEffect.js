import React, { useEffect, useState } from 'react';
import './CounterWithHooksUseEffect.scss';

export const CounterWithHooksUseEffect = function (props) {
    const [count, setCount] = useState(props.initialValue);

    useEffect(() => console.log("mount"), []);
    useEffect(() => console.log("will update count"), [count]);
    useEffect(() => console.log("will update any"));
    useEffect(() => () => console.log("will update count or unmount"), [count]);
    useEffect(() => () => console.log("unmount"), []);

    return (
        <div className="b-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

