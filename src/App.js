import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import { SumWithHooks } from "./componentsWithHooks/SumWithHooks/SumWithHooks";
import CounterDispatch from "./componentsWithHooks/CounterDispatch";
import { FormGallery } from "./componentsWithHooks/FormGallery/FormGallery";
import { UserWithHooks } from "./componentsWithHooks/UserWithHooks/UserWithHooks";
import { ListWithHooks } from "./componentsWithHooks/ListWithHooks/ListWithHooks";
import { CounterWithHooksWithParams } from "./componentsWithHooks/CounterWithHooksWithParams/CounterWithHooksWithParams";


const initialState = {
    count: 20
};

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

const App = () => {
    // const scroll = useMouseMove(1);
    const scroll = 1;

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterDispatch.Provider value={[state, dispatch]}>
            <div className="App">
                <Router>

                    <header>
                        <nav>
                            <ul className="b-list">
                                <li className="b-list__list">
                                    <Link className="b-list__link" to="/">Inicio</Link>
                                </li>
                                <li className="b-list__list">
                                    <Link className="b-list__link" to="/logo">Logo</Link>
                                </li>
                                <li className="b-list__list">
                                    <Link className="b-list__link" to="/counter/5">Counter with 5</Link>
                                </li>
                                <li className="b-list__list">
                                    <Link className="b-list__link" to="/counter/5?initialParamValue=25">Counter with 5
                                        queryParams 25</Link>
                                </li>
                                <li className="b-list__list">
                                    <Link className="b-list__link" to="/form">Formulario</Link>
                                </li>
                                <li className="b-list__list">
                                    <Link className="b-list__link" to="/list">Lista</Link>
                                </li>
                                <li className="b-list__list">
                                    <Link className="b-list__link" to="/gallery">Galeria</Link>
                                </li>
                            </ul>
                        </nav>
                        {/*<ListWithHooks list={['Hola', 'Soy un item', 'Me muerooo']}/>*/}
                        {/*<CounterWithHooks initialValue={5}/>*/}
                        {/*<HolaMundo/>*/}
                        {/*<State textToShow="Hola"/>*/}

                        {/*<List textToShow="Hola"/>*/}
                        {/*<List textToShow="Adios"/>*/}

                    </header>


                    <Switch>

                        <Route path="/list">
                            {/*<List textToShow="Adios" counter={10}/>*/}
                            <ListWithHooks list={['Hola', 'Soy un item', 'Me muerooo']}/>
                            {/*<State/>*/}
                        </Route>
                        <Route path="/counter/:initialValue">
                            {/*<CounterContext.Provider value="5">*/}

                            {/*<CounterWithUseReducer initialCount={10}/>*/}
                            {/*<CounterWithHooks/>*/}
                            {/*<Counter/>*/}
                            {/*<FormGallery/>*/}
                            {/*<CounterWithContext/>*/}
                            {/*<CounterWithHooksUseEffect initialValue={10}/>*/}
                            {/*<ListWithHooks initialValue={10}/>*/}
                            <CounterWithHooksWithParams/>
                            {/*</CounterContext.Provider>*/}
                        </Route>
                        {/*<Route path="/counter">*/}
                        {/*    <CounterWithHooksWithParams/>*/}
                        {/*</Route>*/}
                        <Redirect from='/counter' to='/counter/5'/>
                        <Route path="/form">
                            <UserWithHooks/>
                            {/*<UserForm/>*/}
                        </Route>
                        <Route path="/logo">
                            <img src={logo} style={{ transform: `scale(${scroll / 1000})` }} className="App-logo"
                                 alt="logo"/>
                        </Route>
                        <Route path="/gallery">
                            <FormGallery/>
                        </Route>
                        <Route path="/">
                            <SumWithHooks a={0} b={0}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </CounterDispatch.Provider>

    );
}

export default App;
