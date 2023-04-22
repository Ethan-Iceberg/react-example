import React from 'react';
import {testalert} from '../js/test';

function Example4() {
    
    const handleClick = () => {
        testalert();
      };

    return (
        <>
            <div onClick={handleClick} id="click-id">
                test
            </div>
        </>
    );
}

export default Example4;
