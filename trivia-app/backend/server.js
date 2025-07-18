const express = require("express");
const cors = require("cors");
const bcrypt = require('bcrypt');
//Edit to correct path
const { sendToVM } = require('./helperfiles/producer');
const { sendToVMWithReply } = require('./messageClient');

const app = express();
const PORT = 5000;

//let submissions = [];

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    console.log('Received registration data:', { username, email, hashPass });

    const payload = {
      type: 'register',
      username,
      email,
      password: hashPass
    };

    const response = await sendToVMWithReply('dbvm', payload);

    if (response.success) {
      res.json({ message: `Registration successful for ${username}` });
    } else {
      res.status(400).json({ error: response.error || 'Registration failed' });
    }

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const payload = {
      type: 'login',
      email,
      password
    };
  try {
    const response = await sendToVMWithReply('dbvm', payload);

    if (response.success) {
      res.json({ message: 'Login successful', token: response.token });
    } else {
      res.status(401).json({ error: response.error || "Login failed" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/api/profile/update', async (req, res) => {
  const { username, email, bio } = req.body;

  try {
    const payload = {
      type: 'updateProfile',
      username,
      email,
      bio
    };
    const response = await sendToVMWithReply('dbvm', payload);

    if (response.success) {
      res.json({ message: 'Profile updated successfully' });
    } else {
      res.status(400).json({ error: response.error || 'Profile update failed' });
    }

  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to display all submissions
// Test cases, take out eventually
app.get('/submissions', (req, res) => {
  res.send(`
    <h1>All Registrations</h1>
    <pre>${JSON.stringify(submissions, null, 2)}</pre>
  `);
});
// Example trivia question route
app.get("/api/questions", (req, res) => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      id: 2,
      question: "2 + 2 = ?",
      options: ["3", "4", "5"],
      answer: "4"
    }
  ];
  res.json(questions);
});
/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
*/


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
