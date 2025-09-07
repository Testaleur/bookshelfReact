const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 4000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(bodyParser.json());

// Read books
app.get('/books', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Cannot read file' });
    res.json(JSON.parse(data));
  });
});

// Add a book
app.post('/books', (req, res) => {
  const newBook = req.body;
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Cannot read file' });
    const books = JSON.parse(data);
    const newId = books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;
    newBook.id = newId;
    books.push(newBook);
    fs.writeFile(DATA_FILE, JSON.stringify(books, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Cannot write file' });
      res.json({ success: true, books });
    });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
