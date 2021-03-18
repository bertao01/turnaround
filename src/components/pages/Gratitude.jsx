import React, { useState, useEffect } from 'react'
import Grat from '../../images/gratitude.jpg'
import Button from '../partials/Button';
import data from '../partials/data';

const Gratitude = () => {

    const [ num, setNum ] = useState(5)

    const handleClick = (param) => {
        
        if( param === 'back' && num !== 5 ){
            setNum( num - 1 )
        } else if (param === 'next' && num !== 6){
            setNum( num + 1 )
        }
    }

    return (
        <div className="d-flex">
            <img src={Grat} className="gratitude-img" alt=""/>
            <div>
                <h2>{data[num].title}</h2>
                <p>{data[num].text}</p>
                <Button color="#f44336" value="Back" event={() => handleClick('back')}/>
                <Button color="#4CAF50" value="Next" event={() => handleClick('next')}/>
            </div>
        </div>
    )
}

export default Gratitude