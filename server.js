const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// MySQL Connection Configuration
const connection = mysql.createConnection({
  host: 'mysql', // Docker Compose service name
  user: 'root',
  password: '',
  database: 'grocery_booking_db',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// ... (Rest of the code from the previous example)

app.listen(port, () => {
  console.log(`Grocery Booking API listening at http://localhost:${port}`);
});
