import React from 'react';
import { Link } from 'react-router-dom';

function DashBoard() {

  const myData = {
    name: 'Some thing',
    price: 123
  }

  return (
    <>
      <Link to={"../example1"}>
        <div>way to data from DB</div>
      </Link>
      <Link to={"../example2"} state={myData}>
        <div>props test between pages</div>
      </Link>
      <Link to={"../example3"}>
        <div>usestate</div>
      </Link>
      <Link to={"../example4"}>
        <div>import js</div>
      </Link>
      <Link to={"../example5"}>
        <div>import js</div>
      </Link>

    </>
  );
}

export default DashBoard;
