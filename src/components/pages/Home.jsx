import React from 'react'
import Success from '../../images/success.jpg'
import Button from '../partials/Button';

const Home = props => {
    return (
        <div className="d-flex">
            <img src={Success} class="success-img" alt=""/>
            <div>
                <h2>Welcome Folks !</h2>
                <p>This app is dedicated to all of you who survived 2020, one of the worst years in history. I will show you a different perspective of life with the simple principles listed above. Chech them and overcome negativity !</p>
                <Button color="#4CAF50" value="Next"/>
            </div>
        </div>
    )
}

export default Home
