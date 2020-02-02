import React, { Component } from 'react';
import './CounterWithParams.css';
import { withRouter } from "react-router";


class CounterWithParams extends Component {


    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
console.log('##ABEL## >> CounterWithParams >>  constructor', this.props);

    }

    add(e) {
        this.setState({counter: this.state.counter + 1});
    }

    substract(e) {
        this.setState({counter: this.state.counter - 1});
    }

    render() {
        return (
            <div className="b-counter">
                <p>Contador {this.state.counter}</p>
                <button className="b-counter__button" onClick={this.add.bind(this)}>+</button>
                <button className="b-counter__button" onClick={this.substract.bind(this)}>-</button>
            </div>
        )
    }
};

export default withRouter(CounterWithParams);
