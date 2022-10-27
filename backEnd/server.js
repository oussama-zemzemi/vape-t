
const express = require('express');

const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

const atomizer=require('./Routers/productsRoute.js')
const saveAtomizer=require('./Routers/productsRoute.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/atomizer',atomizer)
app.use('/api/users', require('./Routers/userRoutes'));



console.log(process.env.JWT_SECRET)

app.listen(port, () => console.log(`Server started on port ${port}`));