const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'Scout_DB'
});

db.connect(function (err: Error) {
  if (err) throw err; 
  console.log('db has successfully connected');
});

app.get('/api/recordings', function (req, res) {
  db.query('SELECT * FROM recording', (err, records) => {
    if (err) throw err;
    res.send(records);
  })
});

app.listen('8080');