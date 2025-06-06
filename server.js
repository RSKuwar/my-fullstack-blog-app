import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

//env config
dotenv.config()

//route
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'

//mongodb
connectDB()

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

//port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)
})
