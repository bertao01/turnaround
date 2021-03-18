import React from 'react'
import Profile from '../../images/profile.jpeg'
import Button from '../partials/Button';

const About = () => {
    return (
        <div className="d-flex">
            <img src={Profile} className="profile-img" alt=""/>
            <div>
                <h1>I'm Victor</h1>
                <p>A self-taught Web developer from the sea . After the pandemic I had to stop sailing for a period and discovered a talent for programming. It's a pleasure to share my thoughts with the world through the internet. Thanks a lot for your being here !</p>
                <Button color="#f44336" value="Back"/>
            </div>
        </div>
    )
}

export default About
