import React, { useState, useEffect } from 'react'
import Exercise from '../../images/health.jpg'
import Button from '../partials/Button';
import '../partials/data'
import data from '../partials/data';

const Health = () => {

    const [ num, setNum ] = useState(0)

    const handleClick = (param) => {
        
        if( param === 'back' && num !== 0 ){
            setNum( num - 1 )
        } else if (param === 'next' && num !== 4){
            setNum( num + 1 )
        }
    }

    return (
        <div className="d-flex">
            <div>
                <img src={Exercise} className="health-img" alt=""/>
            </div>
            <div>
                <h2>{data[num].title}</h2>
                <p>{data[num].text}</p>
                <Button color="#f44336" value="Back" event={() => handleClick('back')}/>
                <Button color="#4CAF50" value="Next" event={() => handleClick('next')}/>
            </div>
        </div>
    )
}

export default Health