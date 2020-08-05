import React, { useState } from 'react';
import './CounterWithHooksWithParams.scss';
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

export function CounterWithHooksWithParams () {
    const [count, setCount] = useState(Number(useParams().initialValue));
    const query = useQuery();
    const history = useHistory();

    console.log('##ABEL## >> useLocation >>  ', useLocation());
    console.log('##ABEL## >> useHistory >>  ', useHistory());
    console.log('##ABEL## >> useParams >>  ', useParams());
    console.log('##ABEL## >> useRouterMatch >>  ', useRouteMatch());
    console.log('##ABEL## >> useRouterMatch >>  ', query.get('name'));

    const goList = () => {
        history.push('../list')
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div className="b-counter-with-hooks">

            <button onClick={goList}>Go List!</button>
            <button onClick={goBack}>Go Back!</button>
            {/*<p>Valor inicial del parametro {query.get('initialParamValue')}</p>*/}
            <p>Contador {count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

