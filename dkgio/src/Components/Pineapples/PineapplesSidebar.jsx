import React from 'react';
import { pineapples } from '../../Data/pineapples/pineapples';
import { GiPineapple } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
import './PineappleSidebar.css'
import PineappleSidebarCard from './PineappleSidebarCard';

const PineapplesSidebar = () => {

  const history = useHistory();

  return (
    <div className='pineapples-sidebar'>
        <div className='sidebar-logo' onClick={()=>{history.push('/')}}>
            <svg width="0" height="0">
              <linearGradient id="green-gradient" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop stopColor='#fa8d11' offset="10%" />
                <stop stopColor="#29fa11" offset="100%" />
              </linearGradient>
            </svg>
            <div className='logo-sidebar'>
              <GiPineapple size={100} style={{ fill: "url(#green-gradient)" }} />
            </div>
        </div>
        <div>
            {pineapples.map((item, index) => {
                return (
                  <PineappleSidebarCard item={item} index={index} />
                );
            })}
        </div> 
    </div>
  )
}

export default PineapplesSidebar