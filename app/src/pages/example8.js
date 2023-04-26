import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Example8() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/example9');
  };
    return (
        <>
            <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to example9</button>
    </div>
        </>
    );
}

export default Example8;
