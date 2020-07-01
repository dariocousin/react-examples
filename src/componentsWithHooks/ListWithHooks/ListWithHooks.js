import React from 'react';

export function ListWithHooks (props) {
    const items = [];
    for (let i = 0; i < props.list.length; i++) {
        items.push(<li key={i}>{props.list[i]}</li>);
    }

    return (
        <ul>
            {items}
        </ul>
    )
};

