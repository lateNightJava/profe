import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
    default: 'Instructor',
  },
});

export default mongoose.model('User', userSchema);
