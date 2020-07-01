import React, { useState } from 'react';
import './CounterWithHooksWithParams.scss';
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

export function CounterWithHooksWithParams () {
    const [count, setCount] = useState(Number(useParams().initialValue));
    // const query = useQuery();

    console.log('##ABEL## >> useLocation >>  ', useLocation());
    console.log('##ABEL## >> useHistory >>  ', useHistory());
    console.log('##ABEL## >> useParams >>  ', useParams());
    console.log('##ABEL## >> useRoutuerMatch >>  ', useRouteMatch());


    return (
        <div className="b-counter-with-hooks">
            {/*<p>Valor inicial del parametro {query.get('initialParamValue')}</p>*/}
            <p>Contador {count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

