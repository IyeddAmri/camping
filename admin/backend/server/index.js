const express = require('express');
const cors = require('cors');
const app = express();
const PORT =  8080;

const productRoutes = require('../routes/prodroutes');
const userRoutes = require('../routes/userroute');




app.use(cors());
app.use(express.json()); 
app.use('/prod', productRoutes);
app.use('/user', userRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
