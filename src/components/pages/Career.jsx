import React from 'react'
import Carreira from '../../images/career.jpg'

const Career = () => {
    return (
        <div className='d-flex'>
            <img src={Carreira} className="career-img" alt=""/>
            <div>
                <h2>Career upgrade</h2>
                <p>"Do what you love and money will follow" - Forget this garbage. Its the same as saying "Eat what you like and you'll be healthy". People like to spread lies about life just to avoid getting out of comfort zone. If you want to change your life, you better get you hands dirty !</p>
            </div>
        </div>
    )
}

export default Career