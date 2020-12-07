import React from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from '../AuthOptions/AuthOptions';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
            <div className="mt-3 float-left">
                <h3 className="text-light">Assigment</h3>
            </div>
            <div className="float-right mx-auto mt-4">
            <AuthOptions />
            </div>
           
            </div>
        </div>
    )
}

export default Header
