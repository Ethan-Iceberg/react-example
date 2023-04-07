import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Example1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then(res => setData(res.data))
      .catch(err => console.log(`Error fetching data: ${err}`));
  }, []);

  return (
    <>
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default DashBoard;
