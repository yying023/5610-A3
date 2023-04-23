const express = require('express')
const dbConnect = require('./dbConnect')
const app = express();
app.use(express.json());
const userRoute = require('./routes/userRoute')
const transactionsRoute = require('./routes/transactionsRoute')

app.use('/api/transactions/' , transactionsRoute)


app.use('/api/users/', userRoute)






app.listen(8000, () => {
   console.log("Server running on http://localhost:8000 🎉 🚀");
   });