import React from 'react';
import { useState } from 'react';






function FunctionalState() {

    const[count,setMe] = useState(0);

    // let count = 0;

const countMe = () => {
//     count++;
// console.log(count);

setMe(count + 1);
}

const countMin = () => {
    //     count++;
    // console.log(count);
    
    setMe(count - 1);
    }

    const reset = () => {
        //     count++;
        // console.log(count);
        
        setMe(0);
        }

        

    const customeStyle1 = {
        backgroundColor: 'blue',
        padding: '10px',
        cursor: 'pointer',
        color: 'white',
        marginRight: '10px'
    }

    const customeStyle2 = {
        backgroundColor: 'red',
        padding: '10px',
        cursor: 'pointer',
        color: 'white'
    }

    return (
        <div>
            <h1>React Hook useState - Functional Component</h1>

            <h2>{count}</h2>

            <button onClick={countMe} style={customeStyle1}>Increment</button>
            <button onClick={reset} style={customeStyle1}>Reset</button>
            <button onClick={countMin} style={customeStyle2}>Decrement</button>
           


        </div>
    )
}

export default FunctionalState
