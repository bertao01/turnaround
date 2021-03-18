import React, { useState, useEffect } from 'react'
import Mind from '../../images/mindset.jpg'
import Button from '../partials/Button';
import data from '../partials/data';

const Mindset = () => {
    
    const [ num, setNum ] = useState(11)

    const handleClick = (param) => {
        
        if( param === 'back' && num !== 11 ){
            setNum( num - 1 )
        } else if (param === 'next' && num !== 12){
            setNum( num + 1 )
        }
    }

    return (
        <div className="d-flex">
            <img src={Mind} className="mindset-img" alt=""/>
            <div>
            <h2>{data[num].title}</h2>
                <p>{data[num].text}</p>
                <Button color="#f44336" value="Back" event={() => handleClick('back')}/>
                <Button color="#4CAF50" value="Next" event={() => handleClick('next')}/>
            
            </div>
        </div>
    )
}

export default Mindset