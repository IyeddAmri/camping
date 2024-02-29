const express = require('express');
const cors = require('cors');
const app = express();
const eventroute = require('../routes/eventRoute.js');
const productRoutes = require('../routes/productsroute');
const activityRoutes = require('../routes/activitiesroute');
const photoroute = require('../routes/photogalleryroute.js');

app.use(cors());
app.use(express.json()); 
app.use(cors());
app.use('/event', eventroute); 
app.use('/api', productRoutes);
app.use('/activities', activityRoutes);
app.use("/photo", photoroute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
