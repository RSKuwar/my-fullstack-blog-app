import mongoose from 'mongoose'
import colors from 'colors';

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to database`.bgGreen.white)
    } catch (error) {
        console.log(`Mongo connection Error ${error}`.bgBlue.white);
    }
}

export default connectDB;