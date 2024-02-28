const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('../routes/productsroute');
const activityRoutes = require('../routes/activitiesroute');

app.use(cors());
app.use(express.json()); 
app.use('/api', productRoutes);
app.use('/activities', activityRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
