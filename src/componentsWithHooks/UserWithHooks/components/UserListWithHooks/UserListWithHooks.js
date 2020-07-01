import React from 'react';

export function UserListWithHooks (props) {

    const items = [];

    for (let i = 0; i < props.list.length; i++) {
        let item = props.list[i];
        items.push(
            <li key={i}>Me llamo {item.name}, tengo {item.age} años y soy {item.rol}
                <button onClick={() => {props.fnEditUser(i)}}>Edit</button>
                <button onClick={() => {props.fnCopyUser(i)}}>Copy</button>
                <button onClick={() => {props.fnRemoveUser(i)}}>X</button>
            </li>);
    }

    return (
        <ul>
            {items}
        </ul>
    )
};

