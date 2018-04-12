import React from 'react'
import PropTypes from 'prop-types'

import Input from './components/Input'
import Radio from './components/Radio'

const WonderForm = props => {
    return (
        <div className="wonder-form">
            <Input type="text" onChange={props.onInputChange} name="nombre" placeholder="nombre"/>
            <Input type="text" onChange={props.onInputChange} name="apellido" placeholder="apellido" />
            <Input type="number" onChange={props.onInputChange} name="edad" placeholder="edad" />
            <Input type="text" onChange={props.onUsernameChange} name="username" placeholder="username"/>
            <div>
                <Radio onInputChange={props.onInputChange} values={['hombre', 'mujer', 'disgenero']} defaultValue="other"/>
                
            </div>
        </div>
    )
}

export default WonderForm

WonderForm.propTypes = {
    onUsernameChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}