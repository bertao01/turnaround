import React from 'react'
import Profile from '../../images/profile.jpeg'

const Aside = () => {
    return (
        <aside>
            <img src={Profile} className="profile-img" alt=""/>
            <h1>I'm Victor</h1>
            <p>A Web developer from the sea, master in adapt to crisis situations, inside and outside the stock market.</p>
        </aside>
    )
}

export default Aside
