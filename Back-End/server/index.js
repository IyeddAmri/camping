const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json()); 
app.use(cors({
  origin: 'http://localhost:3000' 
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
