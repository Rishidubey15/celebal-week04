const express = require('express');
const app = express();
const PORT = 3000;

// ---------------------
// Middleware (Logger)
// ---------------------
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ---------------------
// Route 1: Home
// ---------------------
app.get('/', (req, res) => {
  res.send('Welcome to the Express Web Server!');
});

// ---------------------
// Route 2: About
// ---------------------
app.get('/about', (req, res) => {
  res.send('This is the About Page. Built with Express.js.');
});

// ---------------------
// Start Server
// ---------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
