import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "user"]
  },
});

export default mongoose.model("User", userSchema);
