import React from 'react'
import Success from '../../images/growth.png'
import Minimal from '../../images/minimalism.jpeg'

const Minimalism = () => {
    return (
        <div className="d-flex">
            <img src={Minimal} className="minimalism-img" alt=""/>
            <div>
                <h2>Get rid of garbage!</h2>
                <p>Minimalism is owning fewer possessions. Minimalism is intentionally living with only the things you really need. Those items that support your purpose. When you remove the distraction of excess possessions, you can focus more on those things that matter most.</p>
            </div>
        </div>
    )
}

export default Minimalism