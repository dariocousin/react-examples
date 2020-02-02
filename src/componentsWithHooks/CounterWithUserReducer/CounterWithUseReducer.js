import React, { useReducer } from 'react';
import './CounterWithUserReducer.scss';
import { useParams } from 'react-router-dom'

const initialState = { count: 0 };
//
// function init (initialCount) {
//     return { count: initialCount };
// }

function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        // case 'reset':
        //     return init(action.payload);
        default:
            throw new Error();
    }
}

export const CounterWithUseReducer = function () {
    const initialValue = Number(useParams().initialValue);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="b-counter-with-hooks">
            <p>Count: {state.count}</p>
            {/*<button className="b-counter-with-hooks__button"*/}
            {/*        onClick={() => dispatch({ type: 'reset', payload: initialValue })}>*/}
            {/*    Reset*/}
            {/*</button>*/}
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}
