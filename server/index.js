require('dotenv').config()
var morgan = require('morgan');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(morgan('dev'));


/* Routes */

app.get("/api", (req, res) => {

  res.json({ message: process.env.TEST });
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
