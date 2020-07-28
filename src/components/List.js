import React, { Component } from 'react';

class List extends Component {
    render() {
        const items = [];
        for (let i = 0; i < this.props.counter; i++) {
            items.push(<li key={i}>{this.props.textToShow} {i}</li>);
        }

        return (
           <ul>{items}</ul>
        )
    }
};

export default List
