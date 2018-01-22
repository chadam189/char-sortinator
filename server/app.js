const express = require('express');
const bodyParser = require('body-parser');
const { sortinate } = require('./utils.js');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  // serve up static files
  res.send('hello world');
});

app.post('/sortinate', (req, res) => {
	const input = req.body.string || 'error';
	const result = sortinate(input);
	res.send(result);
});

app.all('*', (req, res) => {
	res.send(404);
});

app.listen(3000, () => console.log('Char Sortinator is listening on port 3000!'));