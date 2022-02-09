import React from 'react';
import SiteHeader from '../../Components/SiteHeader/SiteHeader.jsx';
import { pineapples } from '../../Data/pineapples/pineapples';
import './Pineapples.css'

const Pineapples = () => {
  return (
      <>
        <SiteHeader />
        <div className='pineapples container'>
          <>
            <nav className='pineapples'>
              <ul className='nav-menu-items'>
                {pineapples.map((item, index) => {
                  return (
                    <li key={index} className='pineapple-card'>
                      <a href={item.path}>
                        {item.icon}
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        </div>
      </>
  );
};

export default Pineapples;