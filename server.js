const express = require('express');
const basicAuth = require('express-basic-auth');
const fs = require('fs');
const path = require('path');

const app = express();
const DATA_FILE = path.join(__dirname, 'menu-items.json');
const PORT = process.env.PORT || 3000;
const ADMIN_PASS = process.env.ADMIN_PASS || 'changeme';

app.use(express.json());
app.use(express.static(__dirname));

function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/menu-items', (req, res) => {
  res.json(readData());
});

const adminAuth = basicAuth({
  users: { admin: ADMIN_PASS },
  challenge: true
});

app.get('/admin', adminAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.post('/api/menu-items/:id', adminAuth, (req, res) => {
  const data = readData();
  const item = data.find(i => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  Object.assign(item, req.body);
  writeData(data);
  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
