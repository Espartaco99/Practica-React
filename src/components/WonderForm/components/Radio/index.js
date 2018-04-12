import React from 'react'
class Radio extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                values: props.values,
                activeValue: props.defaultValue
            }
        }
    onValueChange = e => {
        const value = e.target.value
        this.setState({
            activeValue: value
        })
        console.log(this.props)
        this.props.onInputChange(this.props.name, value)
    }
    render() {
        const { values, activeValue } = this.state

        return (
            <div>
                {values.map((value,i)=> {
                    return(
                        <span key = {i}>
                            <label htmlFor="">{value}</label>
                            <input 

                                type="radio"
                                value={value}
                                checked ={value === activeValue}
                                onChange={this.onValueChange}
                            />
                        </span>
                    )
                })}
                </div>
        )
    }
}
export default Radio;