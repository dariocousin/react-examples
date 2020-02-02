import React, { Component } from 'react';

class State extends Component {

    constructor(props) {
        super(props);
        console.log('##ABEL## >> State >>  constructor', props);
        this.state = {numberOfListToShow: 5}
    }

    setNumberOfListToShow() {
        this.setState({numberOfListToShow: this.state.numberOfListToShow + 1})
    }

    render() {
        console.log(this.props);
        const items = [];
        for (let i = 0; i < this.state.numberOfListToShow; i++) {
            items.push(<li key={i}>{this.props.textToShow} {i}</li>);
        }

        return (
            <ul>{items}</ul>
        )
    }
};

export default State
