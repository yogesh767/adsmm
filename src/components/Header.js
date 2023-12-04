import React from 'react';
import  logo  from "../images/Cadbury Logo.png";
import secondLogo from '../images/2d logo.png'
import Hemburger from '../images/Hamburger.png'

const Header = () => {
    return (
        <div className='wrapper d-flex align-items-center justify-content-around px-2'>
            <div className='left'>
                <div className='d-flex align-items-center '>
                    <img src={logo} className='logo'/>
                    <img src={secondLogo} className='logo2'/>
                </div>
            </div>
            <div className='right d-flex align-items-right'>
            <img src={Hemburger} className='logo3'/>

            </div>
            
        </div>
    );
};

export default Header;