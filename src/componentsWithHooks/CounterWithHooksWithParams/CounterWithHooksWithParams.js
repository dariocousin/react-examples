import React, { useEffect, useState } from 'react';
import './CounterWithHooks.scss';
import {
    useParams
} from "react-router-dom";
export const CounterWithHooks = function (props) {



    const [count, setCount] = useState(useParams().initialValue);

    useEffect(() => {
        console.log('##ABEL## >> HookCounter >>  HookCounter', props);
        // Actualiza el título del documento usando la API del navegador
        document.title = `Your counter is ${count}`;

        // Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos,
        // el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados.
    });

    return (
        <div className="b-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

