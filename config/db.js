import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://sushankdahiwadkar:6UUs1vux0pMV57Ea@sushank1.lt2y3sb.mongodb.net/?retryWrites=true&w=majority');

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
