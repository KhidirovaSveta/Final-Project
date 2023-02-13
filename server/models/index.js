import mongoose from "mongoose";

const { Schema } = mongoose;

const sweetiesSchema = new Schema(
  {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    shopReturn: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: String, required: true },
    brand: { type: String, required: true },
  },
  { timestamps: true }
);

const Sweeties = mongoose.model("Sweeties", sweetiesSchema);

export default Sweeties;