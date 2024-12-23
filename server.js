const express = require('express');
const path = require('path');
const app = express();

// Statik dosyaları public klasöründen sun
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa için route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ezgi.html'));
});

// Sunucu başlatma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;