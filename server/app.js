const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sortinate } = require('./utils.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/sortinate', (req, res) => {
	const input = req.body.string || 'error';
	const result = sortinate(input);
	res.send(result);
});

app.all('*', (req, res) => {
	res.sendStatus(404);
});

app.listen(3000, () => console.log('Char Sortinator is listening on port 3000!'));