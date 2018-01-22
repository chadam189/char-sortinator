const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // serve up static files
});

app.listen(3000, () => console.log('Char Sortinator is listening on port 3000!'));