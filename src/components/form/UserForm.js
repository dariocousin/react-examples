import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(props) {
        super(props);
        console.log('##ABEL## >> Counter >>  constructor', props);

        this.state = {
            counter: 0
        }
    }

    add(e) {
        this.setState({counter: this.state.counter + 1});
    }

    substract(e) {
        this.setState({counter: this.state.counter - 1});
    }

    render() {
        console.log('##ABEL## >> Counter >>  render', this.state);
        return (
            <div>
                <p>Contador {this.state.counter}</p>
                <button onClick={this.add.bind(this)}>+</button>
                <button onClick={this.substract.bind(this)}>-</button>
            </div>
        )
    }
};

