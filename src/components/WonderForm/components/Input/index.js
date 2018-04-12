import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    onValueChange = e => {
        let value = e.target.value
        console.log(this.props);
        const { onChange, type, name } = this.props
        onChange(name, value);
        /* if (type !== 'number'){
            onChange('username', value);
        }
        else {
            onChange('text', value);
        } */
    
        
        this.setState({inputValue: value})
    }

    render() {
        const { inputValue } = this.state
        const { type, name } = this.props
        return (
            <div>
                <input 
                    type={type}
                    onChange={this.onValueChange}
                    //onClick={ () => alert({type})} 
                    value={inputValue} 
                />
            </div>
        )
    }
}

export default Input;