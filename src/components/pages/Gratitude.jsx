import React from 'react'
import Grat from '../../images/gratitude.jpg'
import Button from '../partials/Button';

const Gratitude = () => {
    return (
        <div className="d-flex">
            <img src={Grat} className="gratitude-img" alt=""/>
            <div>
                <h2>Be Grateful everyday!!!</h2>
                <p>Gratitude is a thankful appreciation for what an individual receives, whether tangible or intangible. With gratitude, people acknowledge the goodness in their lives. Gratitude helps people feel more positive emotions, relish good experiences, improve their health, deal with adversity, and build strong relationships.</p>
                <Button color="#f44336" value="Back"/>
                <Button color="#4CAF50" value="Next"/>
            </div>
        </div>
    )
}

export default Gratitude