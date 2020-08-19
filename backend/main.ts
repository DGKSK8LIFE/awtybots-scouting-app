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
  if (err) {
    throw err;
  }
  console.log('db has successfully connected');
});
