import React, { useState,useEffect } from 'react';

const LinkClickCounter = () => {
    const[count, setCount] = useState(0);
   
    useEffect(() => {
        document.title = `chats(${count})`
    })



    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter</h1>
            <h1>Counter: {count}</h1>
        <a  href="#" onClick={()=> setCount(count+1)}>click me!</a>

            
        </div>
    );
};

export default LinkClickCounter;
