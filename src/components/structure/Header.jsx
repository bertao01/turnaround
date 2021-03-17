import React from 'react'
import Poop from '../../images/poop.png'
import Success from '../../images/growth.png'

const Header = () => {
    return (
        <header>
            <h4>If 2020 felt like this</h4>
            <img src={Poop} className="Poop" alt="poop"/>
            <h4>for you, you came to the right place.</h4>
            <img src={Success} className="Success" alt="success"/>            
        </header>
    )
}

export default Header
