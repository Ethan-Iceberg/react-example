import React,{useState} from 'react';
import "../css/tb.css";
import MyTable from './tbfolder/modify';
import InsertTable from './tbfolder/insert';

function Example11() {
    const [rows, setRows] = useState([]);
  
    function addRow() { 
      const newRow = { id: rows.length + 1, name: "New Row" };
      setRows([...rows, newRow]);
    }
  
    return (
        <>
      <div>
        <button onClick={addRow}>Add Row</button>
        <table className='my-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MyTable></MyTable>
      <InsertTable></InsertTable>
      </>
    );
  }
  

export default Example11;
