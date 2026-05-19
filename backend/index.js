const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

let fakeApiResponse = [

];

app.get('/api/data', (req, res) => {
  res.json(fakeApiResponse);
});

app.post('/api/data', (req, res) => {
  const newItem = req.body;

  newItem.id = fakeApiResponse.length + 1;
  fakeApiResponse.push(newItem);

  res.json(newItem);
});

// serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});