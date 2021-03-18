import React from 'react'
import Poop from '../../images/poop.png'
import Success from '../../images/growth.png'

const Header = () => {
    return (
        <header>
            <h4>Forget 2020</h4>
                <a href="https://en.wikipedia.org/wiki/COVID-19_pandemic_in_the_United_States">
                    <img src={Poop} className="poop-img" alt="poop"/>
                </a> 
            <h4>Change your mind for better</h4>
                <a href="https://en.wikipedia.org/wiki/Mindset">
                    <img src={Success} className="growth-img" alt="growth"/>            
                </a>
            </header>
    )
}

export default Header
