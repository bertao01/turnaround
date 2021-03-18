import React from 'react'
import Mind from '../../images/mindset.jpg'
import Button from '../partials/Button';

const Mindset = () => {
    return (
        <div className="d-flex">
            <img src={Mind} className="mindset-img" alt=""/>
            <div>
                <h2>Shift your Mindset</h2>
                <p>Change your mindset and make your life better ! First Make a Decision: Be sure about what you want in life. Then trace a solid plan to achieve it. To keep yourself motivated, know how to Self Talk. Set your body posture to succeed. During this journey you can meditate to know yourself better.</p>
                <Button color="#f44336" value="Back"/>
                <Button color="#4CAF50" value="Next"/>
            </div>
        </div>
    )
}

export default Mindset