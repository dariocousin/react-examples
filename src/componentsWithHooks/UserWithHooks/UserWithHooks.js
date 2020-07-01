import React, { useState } from 'react';
import { UserListWithHooks } from "./components/UserListWithHooks/UserListWithHooks";
import { UserFormWithHooks } from "./components/UserFormWithHooks/UserFormWithHooks";

export function UserWithHooks () {

    const [users, setUsers] = useState([{
        name: 'Abel',
        age: 25,
        rol: 'Profesor'
    }, {
        name: 'Abul',
        age: 25,
        rol: 'Alumnos'
    }]);

    const [user, setUser] = useState({name: '', age: '', rol: ''});

    function removeAll () {
        setUsers([]);
    }

    function copyUser (i) {
        setUsers([...users, ...users.slice(i, i + 1)]);
    }

    function removeUser (i) {
        console.log('##ABEL## >> removeUser >>  removeUser',);
        // let localUsers = Object.assign([], users);
        let localUsers = [...users];

        localUsers.splice(i, 1);
        setUsers(localUsers);
    }

    function editUser (i) {
        const user = users[i];
        user.index = i;
        setUser(user)
    }

    function addUser (user) {
        console.log('##ABEL## >> removeUser >>  removeUser',);
        // let localUsers = Object.assign([], users);
        if(user.index){
            setUsers(users.splice(user.index, 1, user))
        }else{
            setUsers([...users, user]);
        }
    }

    return (
        <>
            <UserFormWithHooks user={user} fnAddUser={addUser}/>
            <button onClick={removeAll}>Remove All</button>
            <UserListWithHooks list={users} fnRemoveUser={removeUser} fnCopyUser={copyUser} fnEditUser={editUser}/>
        </>
    )
};

