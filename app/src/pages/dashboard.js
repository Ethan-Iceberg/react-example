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
        <div>redux</div>
      </Link>
      <Link to={"../example6"}>
        <div>way to data from DB for argument</div>
      </Link>
      <Link to={"../example7"}>
        <div>ajax fetch(json) example</div>
      </Link>
      <Link to={"../example8"}>
        <div>navigate to example9</div>
      </Link>
      <Link to={"../example9"}>
        <div>goback example</div>
      </Link>
      <Link to={"../example10"}>
        <div>Insert example</div>
      </Link>
      <Link to={"../example11"}>
        <div>Table Example Code</div>
      </Link>

    </>
  );
}

export default DashBoard;
