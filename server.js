const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the Express Web Server!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page. Built with Express.js.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
