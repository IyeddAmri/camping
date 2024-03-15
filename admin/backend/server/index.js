const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const productRoutes = require('../routes/productsroute');



app.use(cors());
app.use(express.json()); 
app.use('/api', productRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
