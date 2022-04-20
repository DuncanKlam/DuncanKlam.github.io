import React from 'react';
import { GiPineapple } from 'react-icons/gi';
import { useHistory } from "react-router";
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useColorMode  } from '@chakra-ui/react';
import './SiteHeader.css'

const SiteHeader = () => {

  const history = useHistory();
  const { colorMode } = useColorMode();

  const handleClick = (destination) => {
    history.push(destination)
  }

  return(
        <div className='site-header' style={{ 'backgroundColor' : colorMode === 'light' ? '#f0f0f0' : '#282c34'}}>
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
            <ColorModeSwitcher />
          </div>
          <div className='header-options'>
            <div className='header-option one' onClick={()=>{handleClick('/pineapples')}} style={{ 'backgroundColor' : colorMode === 'light' ? '#e9e9e9' : '#282c34'}}>
              Pineapples
            </div>
            <div className='header-option two' onClick={()=>{handleClick('/home')}} style={{ 'backgroundColor' : colorMode === 'light' ? '#e9e9e9' : '#282c34'}}>
              Home
            </div>
            <div className='header-option three' onClick={()=>{handleClick('/about')}} style={{ 'backgroundColor' : colorMode === 'light' ? '#e9e9e9' : '#282c34'}}>
              About
            </div>
            <div className='header-option four' onClick={()=>{handleClick('/donate')}} style={{ 'backgroundColor' : colorMode === 'light' ? '#e9e9e9' : '#282c34'}}>
              Donate
            </div>
            <div className='header-option five' onClick={()=>{handleClick('/contact')}} style={{ 'backgroundColor' : colorMode === 'light' ? '#e9e9e9' : '#282c34'}}>
              Contact
            </div>
            <div className='header-option six' onClick={()=>{handleClick('/download')}} style={{ 'backgroundColor' : colorMode === 'light' ? '#e9e9e9' : '#282c34'}}>
              Download
            </div>
          </div>
        </div>
    );
};

export default SiteHeader;
