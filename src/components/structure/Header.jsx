import React from 'react'
import Poop from '../../images/poop.png'
import Success from '../../images/growth.png'

const Header = () => {
    return (
        <header>
                <h4>Forget 2020 and change your mindset for better</h4>
                <a href="https://en.wikipedia.org/wiki/Mindset">
                    <img src={Success} className="growth-img" alt="growth"/>            
                </a>
            </header>
    )
}

export default Header
