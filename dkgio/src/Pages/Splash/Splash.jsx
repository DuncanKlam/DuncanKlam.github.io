import {useState} from 'react';
import { useHistory } from "react-router";
import { GiPineapple } from 'react-icons/gi';
import { IconButton, Heading, Text } from '@chakra-ui/react'

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
            <Heading as='h1' size={'4xl'} margin={15}>Welcome!</Heading>
            <Text size='xl' marginBottom={5}>
                This is Duncan Klemm's personal website.
            </Text>
            <IconButton 
                aria-label='Enter website' 
                onClick={handleClick}
                h={90}
                w={160}
                bg='green.500'
                color='yellow.300'
                _hover={{
                    bg: 'yellow.500',
                    color: 'green.300'
                }}
                _active={{
                    bg: 'yellow.500',
                    color: 'gray.500'
                }}
                icon={<GiPineapple size={85} fill={'currentColor'}/>}
            >
                Enter
            </IconButton>
        </div>
    );
};

export default Splash;
