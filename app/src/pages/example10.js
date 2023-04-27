import React, { useState } from 'react';
import axios from 'axios';

function Example10() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/insertdata', { name, age })
      .then(response => {
        console.log(response.data);
        // Insert successful, do something here
      })
      .catch(error => {
        console.log(error);
        // Insert failed, handle error here
      });
  };

  return (
    <div>
      <h1>Insert Data into MariaDB</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" value={age} onChange={handleAgeChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Example10;
