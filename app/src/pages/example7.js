import React, {useState} from 'react';

function Example7() {

    const [id, setId] = useState('');
    const [data, setData] = useState(null);


    const handleClick = () => {
        fetch(`/api/example/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Data not found');
          }
          return response.json();
        })
        .then(json => setData(json))
        .catch(error => console.log(error));
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

export default Example7;
