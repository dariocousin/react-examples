import React, { useReducer } from 'react';
import './CounterWithUserReducer.scss';

const initialState = { count: 0 };


function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

export const CounterWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="b-counter-with-hooks">
            <p>Count: {state.count}</p>

            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}
