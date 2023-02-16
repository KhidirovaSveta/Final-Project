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
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Sweeties.findByIdAndDelete(id);
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
