import Sweeties from "../models/index.js";

//get all products

export const getSweeties = async (req, res) => {
  try {
    const sweeties = await Sweeties.find();
    res.status(200).json(sweeties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get products by id
export const getSweetiesById = async (req, res) => {
  const { id } = req.params;
  try {
    const sweeties = await Sweeties.findById(id);
    res.status(200).json(sweeties);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


//delete product by id
export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Sweeties.findByIdAndDelete(id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};



//post new product
export const createProduct = async (req, res) => {

  // const product = req.body;
  
  const newProduct = new Sweeties(req.body);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE BLOG
export const updateProductEdit = async (req, res) => {
  const { id } = req.params;
  // const blog = req.body;
  try {
    const updateProduct = await Sweeties.findByIdAndUpdate(id, req.body);
    res.json(updateProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};