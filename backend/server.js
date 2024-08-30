require('dotenv').config();
const express = require('express');
const cors = require('cors');
const countriesRoutes = require('./routes/countries');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/countries', countriesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
