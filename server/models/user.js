import mongoose from "mongoose";

const User = new mongoose.Schema({
  _id: {
    type: String,
  },
  pubKey: {
    type: String,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: String,
  },
  grades: [
    {
      cipherText: String,
      hash: String,
    },
  ],
  verified: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", User);
