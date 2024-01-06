// useState  ... untuk declare variable
// useEffect ... untuk memanggil function
// useRef ... untuk bind ke satu variable component

import React, { useState, useEffect } from 'react';

const CowSay = () => {
    const [data , setData] = useState(1);
    const [saySomethingElse, setSaySomethingElse] = useState();

    const handleClick = () => {
        setData('1');
    }

    useEffect(() => {
        setData(1000);
    }, [])

    useEffect(() => {
        function detectChanges() {
            if(data === '1') {
                setSaySomethingElse('Something else!');
            }
        }
        detectChanges()
    }, [data])

    return(
        <>
        {data}
        <br />
        <button onClick={handleClick}>Click</button>
        <p>Say what? : {saySomethingElse}</p>
        </>
    )
}

export default CowSay
