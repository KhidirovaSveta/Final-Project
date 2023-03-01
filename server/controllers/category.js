import Category from "../models/category.js";

//post new product
export const createCategory = async (req, res) => {
  // const product = req.body;

  const newProduct = new Category(req.body);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
