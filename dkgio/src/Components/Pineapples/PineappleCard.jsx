import {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {GiPineapple} from 'react-icons/gi';

const PineappleCard = ({ pineapple }) => {

    const history = useHistory();

    const [CSSClass, setCSSClass] = useState('pineapple-card')

    useEffect(() => {
        const arr = ['one','two','three','four','five']
        const number = arr[Math.floor(Math.random() * 4)]
        const newclass = 'pineapple-card pineapple-' + number;
        
        setCSSClass(newclass)
    }, [])
    
    const handleClick = () => {
        let link = '/pineapples' + pineapple.route
        history.push(link)
    }

    return(
        <div className='outer-pineapple-card' onClick={handleClick}>
            <div className={CSSClass}>
                <div className='inner-pineapple-card'>
                    <GiPineapple size={50} />
                    <p>{pineapple.title} | {pineapple.year}</p>
                </div>
            </div>
        </div>
    )
};

export default PineappleCard;
