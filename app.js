const express = require('express');
const connectDatabase = require('./config/dataBase');
const gotenv = require('dotenv')
const app = express();
const cors = require('cors')
gotenv.config()

// connecting data base
connectDatabase()

// converting incoming body into json
app.use(express.json())
app.use(cors())

// router imports
const authRouters = require('./router/authRouter');
const employeeRouters = require('./router/employeeRoutes');

app.get('/',(req, res)=>{
    res.send("Hello world")
})

app.use('/auth', authRouters)
app.use('/employees', employeeRouters)

const PORT = process.env.PORT || 2004

app.listen(PORT, ()=>{
    console.log(`Server is up and running in the port: ${PORT}`);
})