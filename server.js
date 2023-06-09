const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
const apiUrl = process.env.REACT_APP_API_URL;

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tmxkgkwk',
  database: 'web'
});

app.get(apiUrl+'/api/data', (req, res) => {
  pool.getConnection()
    .then(conn => {
      conn.query('SELECT * FROM users')
        .then(rows => {
          res.send(rows);
          conn.release();
        })
        .catch(err => {
          console.log(`Error querying database: ${err}`);
          conn.release();
        });
    })
    .catch(err => {
      console.log(`Error connecting to database: ${err}`);
    });
});

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM ids WHERE id=${id}`;
  pool.getConnection()
    .then(conn => {
      conn.query(query)
        .then(rows => {
          res.send(rows);
          conn.release();
        })
        .catch(err => {
          console.log(`Error querying database: ${err}`);
          conn.release();
        });
    })
    .catch(err => {
      console.log(`Error connecting to database: ${err}`);
    });
});

app.get('/api/example/:id', async (req, res) => {
  const id = req.params.id;
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(`SELECT * FROM ids WHERE id = ${id}`);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Data not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  } finally {
    conn.release();
  }
});

app.post('/api/insertdata', (req, res) => {
  pool.getConnection()
    .then(conn => {
      const { name, age } = req.body;
      conn.query('INSERT INTO names (name, age) VALUES (?, ?)', [name, age])
        .then(() => {
          conn.release();
          res.json({ message: 'Data inserted successfully' });
        })
        .catch(err => {
          conn.release();
          res.status(500).json({ error: err });
        });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// Insert data into database
app.post('/api/inserttbdata', (req, res) => {
  const data = req.body.rows;
  const query = 'INSERT INTO intb (id, name, value) VALUES (?, ?, ?)';
  pool.getConnection()
  .then(conn => {
  // Execute the MySQL insert statement for each row of data
  data.forEach(item => {
    conn.query(query, [parseInt(item.id), item.name, parseInt(item.value)], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
    });
  });
})

  res.status(200).send('Data inserted successfully');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
