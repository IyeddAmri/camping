const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const eventroute = require('../routes/eventRoute.js');
const productRoutes = require('../routes/productsroute');
const activityRoutes = require('../routes/activitiesroute');
const photoroute = require('../routes/photogalleryroute.js');
const campsitesRoutes = require('../routes/campsitesRoutes.js');
const whislistRoutes = require('../routes/wishlistroute.js');
const guide =require("../routes/guide.js");
const transport=require ("../routes/transport.js");
const resource=require("../routes/resources.js")




app.use(cors());
app.use(express.json()); 

app.use('/event', eventroute); 
app.use('/api', productRoutes);
app.use('/activities', activityRoutes);
app.use("/photo", photoroute);
app.use('/campsites', campsitesRoutes);
app.use('/wish', whislistRoutes)
app.use('/res',resource)
app.use('/guide',guide)
app.use('/trans',transport)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
