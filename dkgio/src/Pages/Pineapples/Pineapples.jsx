import { useState, useEffect} from 'react';
import SiteHeader from '../../Components/SiteHeader/SiteHeader.jsx';
import { pineapples } from '../../Data/pineapples/pineapples';
import PineappleCard from '../../Components/Pineapples/PineappleCard.jsx';
import './Pineapples.css'

const Pineapples = () => {
  useEffect(() => {
    pineapples.sort(compare)

    function compare(a, b) {
      if (a.year > b.year) {return -1;}
      if (a.year < b.year) {return 1;}
      return 0;
    }
  }, [])

  return (
      <>
        <SiteHeader />
        <div className='pineapples'>
          {pineapples.map((item, index) => {
            return (
              <PineappleCard key={index} pineapple={item} />
            );
          })}
        </div>
      </>
  );
};

export default Pineapples;