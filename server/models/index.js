import mongoose from "mongoose";

const { Schema } = mongoose;

const sweetiesSchema = new Schema(
  {
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category:{
      type:mongoose.Schema.Types.ObjectId, ref:'Category',
      required:true
    }
  },
  { timestamps: true }
);

const Sweeties = mongoose.model("Sweeties", sweetiesSchema);

export default Sweeties;
