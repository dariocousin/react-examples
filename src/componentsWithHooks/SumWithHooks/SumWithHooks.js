import React from 'react';
import { sumUtils } from "../../utils/sum.utils";
import { useInput } from "../../hooks/useInput";

export const SumWithHooks = function (props) {
    // let obj = useInput(props.a);
    // let a = obj.value;
    // let bindA = obj.bind;
    // let resetA = obj.reset;

    const {value: a, bind: bindA, reset: resetA} = useInput(props.a);
    const {value: b, bind: bindB, reset: resetB} = useInput(props.b);

    const result = sumUtils(a, b);

    return (
        <div>
            <input type="number" {...bindA}/>
            <input type="number" {...bindB}/>

            <p>Resultado: {result}</p>

        </div>
    )
};

