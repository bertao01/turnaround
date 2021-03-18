import React from 'react'

const Button = props => {

    const buttonStyle = { 
        backgroundColor:props.color,
        borderRadius:'5px',
        padding:'10px',
        margin:'0 10px',
        fontWeight:'bold'
    }

    return (
        <button style={buttonStyle} onClick={props.event}>
            {props.value}
        </button>
    )
}

export default Button
