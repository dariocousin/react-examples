import React, { Component } from 'react';

class UsersList extends Component {
    render() {
        const items = [];
        for (let i = 0; i < this.props.users.length; i++) {
            const user = this.props.users[i];
            items.push(<li key={i}>{user.name} tiene {user.years} años y es {user.rol}
                <button onClick={() => {this.props.removeUserFn(i)}}>X</button>
            </li>);
        }

        return (
            <ul>{items}</ul>
        )
    }
};

export default UsersList
