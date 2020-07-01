import React, { useState } from 'react';

export function UserFormWithHooks (props) {

    // const [user, setUser] = useState({});
    const [name, setName] = useState(props.user.name);
    const [age, setAge] = useState(props.user.age);
    const [rol, setRol] = useState(props.user.rol);

    function submit ($event) {
        $event.preventDefault();
        const user = { name, age, rol }
        // const user = { name:name, age:age, rol:rol }
        props.fnAddUser(user);
    }

    console.log('##ABEL## >> UserFormWithHooks >>  UserFormWithHooks', name);
    console.log('##ABEL## >> UserFormWithHooks >>  UserFormWithHooks', props.user.name);
    return (
        <form onSubmit={submit}>
            <label htmlFor="name">
                Name
                <input value={name} type="text" id="name" name="name" placeholder="name"
                       onChange={($event) => {setName($event.target.value)}}/>
            </label>

            <label htmlFor="age">
                Age
                <input value={age} type="text" id="age" name="age" placeholder="age"
                       onChange={($event) => {setAge($event.target.value)}}/>
            </label>

            <label htmlFor="rol">
                Rol
                <input value={rol} type="text" id="rol" name="rol" placeholder="rol"
                       onChange={($event) => {setRol($event.target.value)}}/>
            </label>

            <input type="submit" value="Guardar usuario"/>
        </form>
    )
};

