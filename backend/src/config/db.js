import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    console.log('MongoDB connected...');
  }
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
