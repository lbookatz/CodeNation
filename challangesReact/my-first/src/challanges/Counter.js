import React, {useState} from 'react' 
import './counter.css';

const Number = () => {

    const [number, setNumber] = useState(0);

    return(  
    <div class="button">
        <button onClick={() => setNumber(number + 1)}>+</button>
        {number}
        <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  ) ;

}

// //this create the button that will increment counter
// const ButtonUp = () => {
//     return 
// }

// //this create the button that will decrease counter
// const ButtonDown = () => {
//     return (
//         <button>-</button>
//     )
// }

export default Number

