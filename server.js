const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const customerRoutes = require('./routes/customer');
const compRoutes = require('./routes/comp');
const staffRoutes = require('./routes/staff');
const profitRoutes = require('./routes/profit');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(customerRoutes);
app.use(compRoutes);
app.use(staffRoutes);
app.use(profitRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://itp-sliit:itp123@sllit.empkt.mongodb.net/itp-sliit?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});





