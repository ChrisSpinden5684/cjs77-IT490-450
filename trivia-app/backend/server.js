const express = require("express");
const cors = require("cors");
const bcrypt = require('bcrypt');
//const path = require('path');

const app = express();
const PORT = 5000;

//let submissions = [];

app.use(cors());
app.use(express.json());
// Needed for VM configuration, Comment out below line when developing on local host
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// POST route to receive registration data

/*
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    console.log('Received registration data:', { username, email, hashPass });
    const data = [username, email, hashPass];
    submissions.push(data);
    res.json({ message: `Registration received for ${username}` });
  }
  catch(error){
    console.error("Error hashing password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/api/login', (req, res) => {
  const formData = req.body;
  submissions.push(formData);
  console.log('Received Login:', formData);
  res.json({ message: `Login received for ${formData.email}` });
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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

*/
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
