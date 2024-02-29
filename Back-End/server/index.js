const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('../routes/productsroute');
const resource =require('../routes/resources')
const guide=require('../routes/guide.js')
const transport=require('../routes/transport.js')


app.use(cors());
app.use(express.json()); 
app.use('/api', productRoutes);
app.use('/res',resource)
app.use('/guide',guide)
app.use('/trans',transport)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
