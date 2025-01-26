const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let userSubscriptions = {}; // In-memory storage for simplicity

app.post('/save-subscription', (req, res) => {
  const { userId, subscription } = req.body;
  userSubscriptions[userId] = subscription;
  res.status(200).json({ message: 'Subscription saved successfully' });
});

app.get('/get-subscription/:userId', (req, res) => {
  const { userId } = req.params;
  const subscription = userSubscriptions[userId] || 'basic';
  res.status(200).json({ subscription });
});

app.listen(3001, () => console.log('Server running on port 3001'));