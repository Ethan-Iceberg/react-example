import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Example9() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };
    return (
        <>
            <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>back to the dashboard</button>
    </div>
        </>
    );
}

export default Example9;
