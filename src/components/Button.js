
import './Button.css'
function Button({message, onClick ,children}){

    let clickHandler = function(){
        onClick(message);
    }

    return (
        <button className='btn' onClick={clickHandler}>{children}</button>
    );
}

export default Button;