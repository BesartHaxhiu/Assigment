import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5">Welcome To Assigment</h1>
            <h3 className="text-center mt-5 text-secondary" style={{textTransform: 'capitalize'}}>
                Please Procced to login if you wish to continue
            </h3>            
        </div>
    )
}

export default Welcome
