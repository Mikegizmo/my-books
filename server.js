const express = require('express');
const hostname = 'localhost';
const port = 3000;
const app = express();
const books = require('./books.json');

// Get all the books

app.get('/', (req, res) => {

  res.json(books);

});

// Get a specific book

app.get('/:id', (req, res) => {

  const { id } = req.params;

  res.json(books.filter((ele) => ele.id === parseInt(id)));

});

app.post('/', (req, res) => {

  const body = req.body;

  console.log(body);

  books.push(body);

  res.json({ message: 'The book has been added' });

});

app.put('/:id', (req, res) => {

  const { id } = req.params;

  const body = req.body;

  books.forEach((book, index) => {

    if (book.id === parseInt(id)) {

      books[index] = body;

    }

  });

  res.json({ message: `The book with ID ${id} has been updated` });

  // res.json(books);

});

app.delete('/:id', (req, res) => {

  const { id } = req.params;

  books.forEach((book, index) => {

    if (book.id === parseInt(id)) {

      books.splice(index);

    }

  });

  res.json({ message: `Book with id #${id} has been deleted` });

});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;