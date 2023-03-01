import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
});

const Category = mongoose.model("category", categorySchema);

export default Category;
