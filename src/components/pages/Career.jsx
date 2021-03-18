import React, { useState, useEffect } from 'react'
import Carreira from '../../images/career.jpg'
import Button from '../partials/Button';
import data from '../partials/data';

const Career = () => {

    const [ num, setNum ] = useState(9)

    const handleClick = (param) => {
        
        if( param === 'back' && num !== 9 ){
            setNum( num - 1 )
        } else if (param === 'next' && num !== 10){
            setNum( num + 1 )
        }
    }

    return (
        <div className='d-flex'>
            <img src={Carreira} className="career-img" alt=""/>
            <div>
            <h2>{data[num].title}</h2>
                <p>{data[num].text}</p>
                <Button color="#f44336" value="Back" event={() => handleClick('back')}/>
                <Button color="#4CAF50" value="Next" event={() => handleClick('next')}/>
            
            </div>
        </div>
    )
}

export default Career