import {useState} from 'react';
import { useHistory } from "react-router";
import { GiPineapple } from 'react-icons/gi';
import './Splash.css';


const Splash = () => {

    const history = useHistory();

    const [pineappleFillColor, setPineappleFillColor] = useState('#fa8d11');

    const handleMouseEnter = () => {
        setPineappleFillColor('#faee11')
    }

    const handleMouseLeave = () => {
        setPineappleFillColor('#fa8d11')
    }

    const handleClick = () => {
        history.push('/home')
    }

  return (
        <div className="Splash">
            <header className="Splash-header" >
                {/* <div className='splash-background'>
                    <div class="x">
                        <img class="y" src='http://pngimg.com/uploads/pineapple/pineapple_PNG2760.png'/>
                        <img class="y" src='http://pngimg.com/uploads/pineapple/pineapple_PNG2760.png'/>
                        <img class="y" src='http://pngimg.com/uploads/pineapple/pineapple_PNG2760.png'/>
                    </div>
                </div> */}
                <div className='pineapple-suite-header outer-wrapper'>
                    <div className='pineapple-suite-header small'>Welcome to the</div>
                    <div className='pineapple-suite-header big'>PINEAPPLE LIBRARIES</div>
                </div>
                <svg width="0" height="0">
                    <linearGradient id="green-gradient" x1="100%" y1="50%" x2="0%" y2="50%">
                        <stop stopColor={pineappleFillColor} offset="0%" />
                        <stop stopColor="#29fa11" offset="100%" />
                    </linearGradient>
                </svg>
                <GiPineapple className='enter-site-button' size={140} style={{ fill: "url(#green-gradient)" }}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/>
            </header>
        </div>
    );
};

export default Splash;
