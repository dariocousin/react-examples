import React from 'react';
import { sumHook } from "../hooks/sum.hook";
import { useInput } from "../hooks/useInput.hook";

export const SumWithHooks = function (props) {

    const {value: a, bind: bindA, rest: resetA} = useInput(props.a);
    const {value: b, bind: bindB, reset: resetB} = useInput(props.b);

    const result = sumHook(a, b);

    return (
        <div>
            <input type="number" {...bindA}/>
            <input type="number" {...bindB}/>

            <p>Resultado: {result}</p>

        </div>
    )
};

