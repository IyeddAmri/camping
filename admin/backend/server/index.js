const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 6000;

const productRoutes = require('../routes/prodroutes');



app.use(cors());
app.use(express.json()); 
app.use('/prod', productRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
