const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/../build', 'index.htm'));
});

app.get('/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/../build', 'bundle.js'));
});

app.get('/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '/../build', 'example.json'));
});

app.listen(9000);

console.log('Server running at http://127.0.0.1:9000/');