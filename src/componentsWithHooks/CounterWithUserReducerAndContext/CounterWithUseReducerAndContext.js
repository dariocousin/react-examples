import React, { useContext } from 'react';
import './CounterWithUserReducerAndContext.scss';
import CounterDispatch from "../CounterDispatch";


export const CounterWithUseReducerAndContext = function () {
    const [state, dispatch] = useContext(CounterDispatch);

    return (
        <div className="b-counter-with-hooks">
            <p>Count: {state.count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}
