import React, { Component } from 'react';
const myStyle = {color: 'silver', border: '1px solid #000'};
class HolaMundo extends Component {
    render() {
        return (
            <h1 style={myStyle}>Hola mundo!</h1>
        )
    }
};
export default HolaMundo;
