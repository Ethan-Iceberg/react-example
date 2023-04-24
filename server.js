const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tmxkgkwk',
  database: 'web'
});

app.get('/api/data', (req, res) => {
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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
