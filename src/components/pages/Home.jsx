import React from 'react'
import Success from '../../images/success.jpg'

const Home = props => {
    return (
        <div className="d-flex">
            <img src={Success} class="success-img" alt=""/>
            <div>
                <h2>Hello Folks !</h2>
                <p>This app is dedicated to all of you who survived 2020, one of the worst years in history. I will show you a different perspective of life with the simple principles listed above. Chech them and overcome negativity !</p>
            </div>
        </div>
    )
}

export default Home
