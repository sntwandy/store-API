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
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});

app.get('/products/:id', (req, res)  => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 3',
    price: 1400,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    productId,
    categoryId,
    name: 'Product 4',
    price: 452,
  });
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
})
