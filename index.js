const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/new-route', (req, res) => {
  res.send('Hello, new endpoint');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000
  });
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
