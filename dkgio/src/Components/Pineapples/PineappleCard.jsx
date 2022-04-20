import {useState, useEffect} from 'react';
import { useHistory } from "react-router";
import {GiPineapple} from 'react-icons/gi';
import { useColorMode  } from '@chakra-ui/react';


const PineappleCard = ({ pineapple }) => {

    const history = useHistory();

    const { colorMode } = useColorMode();
    const [shadowColor, setShadowColor] = useState('#ffffff')

    const [CSSClass, setCSSClass] = useState('pineapple-card')
    const [outerCSSClass, setOuterCSSClass] = useState('outer-pineapple-card')
    const [innerCSSClass, setInnerCSSClass] = useState('inner-pineapple-card')

    useEffect(() => {
        const arr = ['one','two','three','four','five']
        const number = arr[Math.floor(Math.random() * 4)]        
        setCSSClass('pineapple-' + number + ' pineapple-card' + " " + colorMode)
        setInnerCSSClass('inner-pineapple-card' + " " + colorMode)
        setOuterCSSClass('outer-pineapple-card' + " " + colorMode)
    }, [colorMode])
    
    const handleClick = () => {
        // let link = '/pineapples' + pineapple.route
        // history.push(link)
    }

    return(
        <div className={outerCSSClass} onClick={handleClick}>
            <div className={CSSClass} >
                <div className={innerCSSClass}>
                    <GiPineapple size={50} />
                    <p>{pineapple.title} | {pineapple.year}</p>
                </div>
            </div>
        </div>
    )
};

export default PineappleCard;
