import React, { useState, useEffect } from 'react'
import Success from '../../images/growth.png'
import Minimal from '../../images/minimalism.jpeg'
import Button from '../partials/Button';
import data from '../partials/data';

const Minimalism = () => {

    const [ num, setNum ] = useState(7)

    const handleClick = (param) => {
        
        if( param === 'back' && num !== 7 ){
            setNum( num - 1 )
        } else if (param === 'next' && num !== 8){
            setNum( num + 1 )
        }
    }

    return (
        <div className="d-flex">
            <img src={Minimal} className="minimalism-img" alt=""/>
            <div>
            <h2>{data[num].title}</h2>
                <p>{data[num].text}</p>
                <Button color="#f44336" value="Back" event={() => handleClick('back')}/>
                <Button color="#4CAF50" value="Next" event={() => handleClick('next')}/>
            
            </div>
        </div>
    )
}

export default Minimalism