import Recipes from "../models/recipes.js"

//get all products

export const getRecipes = async (req, res) => {
    try {
      const sweeties = await Recipes.find({ category: req.query.category });
      res.status(200).json(sweeties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //get products by id
  export const getRecipesById = async (req, res) => {
    const { id } = req.params;
    try {
      const sweeties = await Recipes.findById(id).populate("category");
      res.status(200).json(sweeties);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  
  //delete product by id
  export const deleteRecipesById = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await Recipes.findByIdAndDelete(id);
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error);
    }
  };
  
  //post new product
  export const createResipes = async (req, res) => {
    // const product = req.body;
  
    const newProduct = new Recipes(req.body);
    try {
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };