import React, { Component } from 'react';
import UsersList from "./UsersList";
//
// console.log(this);
// const functionNormal = function (){
//     console.log(this);
// };
//
// const functionArrow = () => {
//     console.log(this);
// };
//
// const functionArrow = () => {
//     return 2;
// };
//
// const functionArrow = () => 2;
//
// function functionNormal(){
//
// }
//
// functionNormal();

export default class UserForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            years: 0,
            rol: '',
            users: [
                {
                    name: 'Abel Cabeza',
                    years: '24',
                    rol: 'Profesor'
                },
                {
                    name: 'Dani Rovira',
                    years: 349,
                    rol: 'una jartáh de gracioso'
                }
            ]
        };

    }

    addUser() {
        // const name = document.getElementById('name').value;
        // const years = document.getElementById('years').value;
        // const rol = document.getElementById('rol').value;
        const name = this.state.name;
        const years = this.state.years;
        const rol = this.state.rol;

        let users = this.state.users;

        users.push({name, years, rol});
        // users.push({name: name, years: years, rol: rol});

        // this.setState({users: users});
        this.setState({users});
    }

    // handleChangeName(event) {
    //     console.log('##ABEL## >> UserForm >>  handleChange', event.target);
    //     this.setState({name: event.target.value});
    // }
    //
    // handleChangeYears(event) {
    //     console.log('##ABEL## >> UserForm >>  handleChange', event.target);
    //     this.setState({years: event.target.value});
    // }
    //
    // handleChangeRol(event) {
    //     console.log('##ABEL## >> UserForm >>  handleChange', event.target);
    //     this.setState({rol: event.target.value});
    // }

    handleChange(event) {
        console.log('##ABEL## >> UserForm >>  handleChange', event.target);
        this.setState({[event.target.name]: event.target.value});
    }


    removeUser(arrayPosition) {
        let users = this.state.users;
        users.splice(arrayPosition, 1);

        this.setState({users: users});
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="name">Nombre
                        <input value={this.state.name} onChange={this.handleChange.bind(this)} id="name" name="name"
                               type="text"/>
                    </label>
                    <label htmlFor="years">Edad
                        <input value={this.state.years} onChange={this.handleChange.bind(this)} id="years"
                               name="years"
                               type="number"/>
                    </label>
                    <label htmlFor="rol">Rol
                        <input value={this.state.rol} onChange={this.handleChange.bind(this)} id="rol" name="rol"
                               type="text"/>
                    </label>
                    <button onClick={this.addUser.bind(this)}>Agregar</button>
                </div>
                <div>
                    <UsersList users={this.state.users} removeUserFn={this.removeUser.bind(this)}/>
                </div>
            </div>
        )
    }
};

