import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`Connected to MongoDB with URI: ${db.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB ${error.message}`);

    }
}

export default connectToMongoDB;