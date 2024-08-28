const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Middleware to parse JSON bodies
app.use(express.json());

// Sample users array
const users = [
    { email: 'user1@example.com', password: '123', username: 'User1', birthdate: '1990-01-01', age: 34, photo: 'asset/user1.jpg' },
    { email: 'user2@example.com', password: '456', username: 'User2', birthdate: '1985-05-15', age: 39, photo: 'asset/user2.jpg' },
    { email: 'user3@example.com', password: 'password3', username: 'User3', birthdate: '2000-07-30', age: 24, photo: 'asset/user3.jpg' }
];

// Route to handle login requests
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ ...user, valid: true });
  } else {
    res.json({ valid: false });
  }
});

// Route for root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
