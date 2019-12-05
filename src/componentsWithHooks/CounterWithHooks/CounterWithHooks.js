import React, { useEffect, useState } from 'react';

export const CounterWithHooks = function (props) {
    console.log('##ABEL## >> HookCounter >>  HookCounter', props);
    const [count, setCount] = useState(props.initialValue);

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        document.title = `Your counter is ${count}`;

        // Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos,
        // el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados.
    });

    return (
        <div>
            <p>Contador {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

