import React, { useState, useEffect } from 'react';

function Example3() {

    const [count, setCount] = useState(0);
    const [mode,setMode] = useState(false);

    function incrementCount() {
      setCount(count + 1);
    }
  
    function decrementCount() {
      setCount(count - 1);
    }
  
    useEffect(() => {
      // Update the document title using the browser API
      if(mode){
      alert('test');
      }else{
        setMode(true);
      }
    },[count]);

    return (
        <>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
        </>
    );
}

export default Example3;
