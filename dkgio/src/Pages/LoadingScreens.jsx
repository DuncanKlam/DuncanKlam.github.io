import { useState } from 'react';
import { Audio, BallTriangle,Bars, Circles, Grid, Hearts, Oval,
    Puff, Rings, TailSpin, ThreeDots,  } from  'react-loader-spinner';

const LoadingScreens = () => {

    const height = 300;
    const width = 300;
    const color = 'purple';
    const ariaLabel = 'loading';
    
    const [listIndex, setListIndex] = useState(0);
    const list = [
        <Audio height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <BallTriangle height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <Bars height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <Circles height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <Grid height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <Hearts height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <Oval height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <Puff height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <Rings height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <TailSpin height={height} width={width} color={color} ariaLabel={ariaLabel}/>,
        <ThreeDots height={height} width={width} color={color} ariaLabel={ariaLabel}/>
    ]
  
    const changeLoadingScreen = () => {
        setListIndex(Math.floor(Math.random() * list.length))
    }
  
    return (
    <div onClick={changeLoadingScreen}>
        {list[listIndex]}
    </div>
  );
};

export default LoadingScreens;
