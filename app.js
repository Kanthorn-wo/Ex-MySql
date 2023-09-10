const express = require('express');
const app = express();
const db = require('./config/database');

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching data from the database');
    } else {
      res.json(results);
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
