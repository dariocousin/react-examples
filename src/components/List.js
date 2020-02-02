import React, { Component } from 'react';

class List extends Component {
    render() {
        console.log(this.props);
        const items = [];
        for (let i = 0; i < 5; i++) {
            items.push(<li key={i}>{this.props.textToShow} {i}</li>);
        }

        return (
           <ul>{items}</ul>
        )
    }
};

export default List
