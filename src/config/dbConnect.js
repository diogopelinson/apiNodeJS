import mongoose from "mongoose";


async function connectDB() {
    await mongoose.connect(
        "mongodb://admin:admin123@localhost:27018/Restaurante?authSource=admin"
    );
    return mongoose.connection;
}

export default connectDB;