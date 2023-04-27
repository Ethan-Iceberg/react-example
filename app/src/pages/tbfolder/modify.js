import React, { useState } from "react";

function MyTable() {
  const [rows, setRows] = useState([
    { id: 1, name: "Row 1", value: 10 },
    { id: 2, name: "Row 2", value: 20 },
    { id: 3, name: "Row 3", value: 30 },
  ]);

  function handleNameChange(event, id) {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, name: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  }

  function handleValueChange(event, id) {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, value: parseInt(event.target.value) };
      }
      return row;
    });
    setRows(newRows);
  }

  function handleDeleteRow(id) {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={(event) => handleNameChange(event, row.id)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.value}
                  onChange={(event) => handleValueChange(event, row.id)}
                />
              </td>
              <td>
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;