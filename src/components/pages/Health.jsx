import React from 'react'
import Exercise from '../../images/health.jpg'

const Health = () => {
    return (
        <div className="d-flex">
            <div>
                <img src={Exercise} className="health-img" alt=""/>
            </div>
            <div>
                <h2>Don't forget your health</h2>
                <p>Health is our biggest asset. It doesn't matter who you are, you must watch what you eat and what you do to preserve a healthy lifestyle. Plan a healthy diet, Avoid sugar, fat and salt in excess, reduce alcohol consumption, quit smoking, make exercises. You can even start a dopamine fast to enjoy common activities in life.</p>
            </div>
        </div>
    )
}

export default Health