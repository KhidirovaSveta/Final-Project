import mongoose from "mongoose";

const { Schema } = mongoose;

const recipesSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);

const Recipes = mongoose.model("recipes", recipesSchema);

export default Recipes;
