import React from 'react';
import { GiPineapple } from 'react-icons/gi';
import { useHistory } from "react-router";
import './SiteHeader.css'

const SiteHeader = () => {

  const history = useHistory();

  const handleClick = (destination) => {
    history.push(destination)
  }

  return(
        <div className='site-header'>
          <div className='banner'>
            <svg width="0" height="0">
              <linearGradient id="green-gradient" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop stopColor='#fa8d11' offset="10%" />
                <stop stopColor="#29fa11" offset="100%" />
              </linearGradient>
            </svg>
            <div className='logo-full' onClick={()=>{handleClick('/')}}>
              <GiPineapple size={100} style={{ fill: "url(#green-gradient)" }} />
              <div className='logo-text'> 
                <h1>TPL</h1>
              </div>
            </div>
          </div>
          <div className='header-options'>
            <div className='header-option one' onClick={()=>{handleClick('/pineapples')}}>
              Pineapples
            </div>
            <div className='header-option two' onClick={()=>{handleClick('/home')}}>
              Home
            </div>
            <div className='header-option three' onClick={()=>{handleClick('/about')}}>
              About
            </div>
            <div className='header-option four' onClick={()=>{handleClick('/donate')}}>
              Donate
            </div>
            <div className='header-option five' onClick={()=>{handleClick('/contact')}}>
              Contact
            </div>
            <div className='header-option six' onClick={()=>{handleClick('/download')}}>
              Download
            </div>
          </div>
        </div>
    );
};

export default SiteHeader;
