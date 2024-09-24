import { Color } from "colors";
import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DATABASE_NAME}`);
        console.log(`MongoDB connected: ${connection.connection.host} - ${DATABASE_NAME}`.blue.bold);
    } catch (error) {
        console.log(`MONGODB connection error:  ${error}`.red.bold);
        process.exit(1) // By calling this function Node.js will force the current process that’s running to exit as soon as possible.
    }
}