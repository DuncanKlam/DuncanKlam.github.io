import React from 'react';
import SiteHeader from '../../Components/Common/SiteHeader/SiteHeader';
import { pineapples } from '../../Components/pineapples/pineapples';
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
                    <li key={index} className='pineapple'>
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