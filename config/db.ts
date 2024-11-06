import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
