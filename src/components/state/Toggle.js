import React, { useState } from 'react';
import "./ToggleStyle.css";

// stateless functional component: component khong su dung state

// function Toggle() {
//     return <div className="toggle"></div>;
// }

// // stateful functional component: component co su dung state

// function Toggle2() {

//     // const [count, setCount] = useState();

//     return <div className="toggle"></div>;
// }

function Toggle() {
    // 1. enabling state: useState(initialize value);

    // 2. initialize state: useState(false);

    // 3. reading state: 

    // 4. update state

    const array = useState(false);
    console.log(array); // [false, function]

    const [on, setOn] = useState(false);
    console.log(on);

    const handleToggle = (on) =>{
        setOn(on => !on);
    }

    return (
        <div>
            <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
                <div className={`spinner ${on ? 'active' : ''}`}></div>
            </div>
        </div>
    )
}

export default Toggle;