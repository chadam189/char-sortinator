const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.JSON());

app.get('/', (req, res) => {
  // serve up static files
});

app.post('/sortinate', (req, res) => {
	// get string 
	// send it to helper function to sort string
	// return result
});

app.all('*', (req, res) => {
	res.send(404);
});

app.listen(3000, () => console.log('Char Sortinator is listening on port 3000!'));