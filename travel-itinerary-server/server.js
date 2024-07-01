const express = require('express');
const sequelize = require('./config/db');
const itineraryRoutes = require('./routes/itinerary');

const app = express();

app.use(express.json());

app.use('/api/itineraries', itineraryRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.log('Unable to connect to the database:', error);
});
