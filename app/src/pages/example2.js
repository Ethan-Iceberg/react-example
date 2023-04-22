import React from 'react';
import { useLocation } from 'react-router-dom';

function Example2() {

    const location = useLocation();
    const data = location.state;

    return (
        <>
            <div>
                <p>{data.name}</p>
                <p>{data.price}</p>
            </div>
        </>
    );
}

export default Example2;
