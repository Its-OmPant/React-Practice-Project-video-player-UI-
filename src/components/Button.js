import { useState } from 'react';
import './Button.css'
function Button(){

    const  [isBtnOn, setIsBtnOn] = useState(false);

    let message = isBtnOn ? "Paused..." : "Playing...."

    let clickHandler = function(){
        if(!isBtnOn){   
            setIsBtnOn(true);
        }
        else{
            setIsBtnOn(false);
        }
        console.log(message);
    }

    return (
        <button className='btn' onClick={clickHandler}>{isBtnOn?'||':'▶'}</button>
    );
}

export default Button;