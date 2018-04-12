import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import WonderForm from './components/WonderForm'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Ralfitita',
            nombre: "Rafa",
            apellido: "Nadal",
            edad: 30,
            genero: ''
        }
    }

    onUsernameChange = username => {
        this.setState({username})
    }

    onInputChange = (key, value) => {
        this.setState({[key]: value})
    }
    isOld(){
        const { edad } = this.state;
        return edad > 28;
    }

    render() {
        const { username, nombre, apellido, edad } = this.state
        const message = `Hi ${nombre} ${apellido}! You are ${edad} and your username is ${username}.`

        return (
            <div className="App">
                <Header logo={logo} />
                <Intro message={message} />
                {this.isOld() && <p>Eres viejo</p>}
                {/* edad > 28 ? <p>Eres viejo</p>: "" */}
                <WonderForm
                    onUsernameChange={this.onUsernameChange}
                    onInputChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default App;
