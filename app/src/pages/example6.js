import React, {useState} from 'react';
import axios from 'axios';

function Example6() {

    const [id, setId] = useState('');
    const [data, setData] = useState(null);


    const handleClick = () => {
        axios.get(`/api/users/${id}`)
        .then(res =>{ setData(res.data[0]);
        })
        .catch(err => console.log(`Error fetching data: ${err}`));
      };

    return (
        <>
    <div>
      <h1>User Viewer</h1>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch User</button>
    </div>

    {data && (
        <div>
          <h2>{data.name}</h2>
          <p>ID: {data.id}</p>
        </div>
    )}
        </>
    );
}

export default Example6;
